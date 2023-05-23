import React, { useEffect, useState } from 'react'
import { Image } from '../../types/CoreTypes'
import { ReactComponent as DownloadIcon } from '../../icons/download-icon.svg'
import './styles.scss'

export type SrcsetConfiguration = {
    image: Image
    width: number
    height: number
    viewportWidth: number
}

export type Props = {
    className?: string
    height?: number
    width?: number
    image?: Image
    alt?: string
    responsive?: SrcsetConfiguration[]
    usePicture?: boolean
    download?: boolean
    title?: string
    sourceHeight?: number
    sourceWidth?: number
    forceCrop?: boolean
};

export const ImageUnit: React.FC<Props> = ({
    className,
    height,
    width,
    image,
    alt,
    title,
    download,
    responsive = [],
    sourceHeight,
    sourceWidth,
    forceCrop,
}: Props) => {
    if (!image) {
        return null
    }

    const [imgUrl, setImgUrl] = useState<string|null>(null)//eslint-disable-line
    const classProp = className ? `graphcms-image ${className}` : 'graphcms-image'
    const altProp = image.title || alt || ''
    const titleProp = image.title || title || undefined
    let srcSet

    if (Object.keys(responsive).length > 0) {
        srcSet = createImgSrcSet(responsive)
    }

    useEffect(() => {//eslint-disable-line
        setImgUrl(createImgUrl(image, sourceWidth ?? width, sourceHeight ?? height, true, forceCrop))
    })

    if (imgUrl === null) {
        return null
    }

    return (
        <div
            className={classProp}
            style={{ position: download ? 'relative' : 'unset' }}>
            <img
                className={`graphcms-image__image ${className || ''}`}
                style={{ maxWidth: width, maxHeight: height }}
                srcSet={srcSet?.srcSet}
                sizes={srcSet?.sizes}
                alt={altProp}
                title={titleProp}
                loading={'lazy'}
                decoding={'async'}
                src={imgUrl}
                draggable={false}
            />

            {download &&
            <a
                className={'graphcms-image__download'}
                href={createImgUrl(image, 0, 0, false)}
                download
                target={'_blank'}
                rel={'noreferrer'}
            >
                <DownloadIcon className="graphcms-image__download-icon"/>
            </a>
            }
        </div>
    )
}

const createImgSrcSet = (responsive: SrcsetConfiguration[]): { srcSet: string, sizes: string, defaultSrc: string } => {
    const sortedSrcsetConfigurations = responsive.sort(({ viewportWidth: a }, { viewportWidth: b }) => a - b)
    let srcSet = ''
    let sizes = ''
    let defaultSrc = ''

    sortedSrcsetConfigurations.forEach((currentValue, index) => {
        const imgUrl = createImgUrl(currentValue.image, currentValue.width, currentValue.height)

        if (defaultSrc.length === 0) {
            defaultSrc = imgUrl
        }

        const trailingComma = index !== sortedSrcsetConfigurations.length - 1 ? ',\n' : ''

        if (currentValue.viewportWidth !== 0) {
            sizes += `(max-width: ${currentValue.viewportWidth}px) ${currentValue.viewportWidth + 'px'}${trailingComma}`
            srcSet += `${imgUrl} ${currentValue.viewportWidth}w${trailingComma}`
        } else {
            sizes += `100vw${trailingComma}`
            srcSet += `${imgUrl}${trailingComma}`
        }
    })

    return {
        srcSet,
        sizes,
        defaultSrc
    }
}

export const createImgUrl = (image: Image, width?: number, height?: number, resize: boolean = true, forceCrop: boolean = false): string => {
    const baseUrl = 'https://media.graphcms.com'

    if (!resize || image.mimeType === 'image/svg+xml') {
        return `${baseUrl}/${image.handle}`
    }

    const resizeOptions = {
        fit: width || height ? 'clip' : undefined,
        height,
        width
    }

    if (forceCrop) {
        resizeOptions.fit = 'crop'
    }

    let resizeString = ''

    for (const [option, value] of Object.entries(resizeOptions)) {
        if (value === undefined || typeof value === 'number' && value === 0) {
            continue
        }

        if (resizeString.length === 0) {
            resizeString = '/resize='
        }

        resizeString += `${option}:${value},`
    }

    return `${baseUrl}${resizeString}/${image.handle}`
}
