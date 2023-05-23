import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CoverSectionImage as CoverSectionImageType } from '../../types'
import {isMobile} from 'react-device-detect';
import classNames from 'classnames'
import parse from 'html-react-parser'
import './_CoverSectionImage.scss'
import { ImageUnit } from '../../components/ImageUnit'
import { ClearLink } from "../ClearLink/ClearLink"

export const CoverSectionImage: React.FC<CoverSectionImageType> = ({
    backgroundImageMobile,
    backgroundImageDesktop,
    description,
    headline,
    primaryButtonLink,
    primaryButtonText,
    secondaryButtonLink,
    secondaryButtonText,
}: CoverSectionImageType) => {

    const [contentHeight, setContentHeight] = useState<number>(0)
    const contentRef = useRef<HTMLDivElement>(null)

    const showPrimaryButton = !!primaryButtonLink && !!primaryButtonText
    const showSecondaryButton = !!secondaryButtonLink && !!secondaryButtonText

    useEffect(() => {
        // This eventListener is needed, because useDeviceType() only triggers rerender on breakpoints
        window.addEventListener('resize', () => {
            setContentHeight(contentRef?.current?.offsetHeight || 0)
        })
    })

    useLayoutEffect(() => {
        setContentHeight(contentRef?.current?.offsetHeight || 0)
    })

    return (
        <section className={'hero-parent-div'}>
            <div className={'hero-parent-div--wrapper'}>
                {
                    backgroundImageDesktop
                        ? (
                            <ImageUnit
                                alt={headline}
                                image={isMobile && backgroundImageMobile ? backgroundImageMobile : backgroundImageDesktop}
                                usePicture={true}
                                height={contentRef?.current?.offsetHeight}
                                sourceHeight={contentRef?.current?.offsetHeight ?? 0}
                                sourceWidth={window.innerWidth}
                                forceCrop={!!contentRef?.current?.offsetHeight}
                                className={'hero-image'}
                            />
                        )
                        : null
                }
                <div className={'container hero-caption'}>
                    <div className={'row justify-content-sm-center text-center gap--p'}
                        ref={contentRef}>
                        <div className={'col col-lg-8'}>
                            <h1>{headline}</h1>

                            {description &&
                            <div className={classNames('hero-caption-text is--wysiwyg', { 'hero-caption-text-no-button': !(showPrimaryButton || showSecondaryButton) })}>
                                {parse(description)}
                            </div>
                            }

                            {(showPrimaryButton || showSecondaryButton) &&
                            <div className={'hero-caption-button d-flex flex-column flex-lg-row justify-content-around justify-content-lg-center'}>
                                {showPrimaryButton && (
                                    <ClearLink
                                        className={'btn btn--cta'}
                                        target={'_blank'}
                                        href={primaryButtonLink || ''}
                                        rel={'noreferrer'}
                                    >
                                        {primaryButtonText}
                                    </ClearLink>
                                )}

                                {showSecondaryButton &&
                                <ClearLink
                                    className={'btn btn--default'}
                                    target={'_blank'}
                                    href={secondaryButtonLink || ''}
                                    rel={'noreferrer'}
                                >
                                    {secondaryButtonText}
                                </ClearLink>
                                }
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
