import React from "react"
import { Link } from "react-router-dom"

export type Props = {
    className?: string
    target?: string
    href: string
    rel?: string
    key?: string | number
    children: any
}

const isIntern = (href: string): boolean => {
    try {
        if (window?.location?.host) {
            const url = new URL(href)

            return url.host === location.host//eslint-disable-line
        }

        return false
    } catch (e) {
        return false
    }
}

const getRelativeUrl = (href: string): string => {
    if (window?.location?.host) {
        const url = new URL(href)

        return url.pathname + url.search
    }

    return href
}

export const ClearLink: React.FC<Props> = (props: Props) => {
    const {
        href,
        className,
        target,
        rel,
        key,
        children
    } = props

    return (
        <>
            {isIntern(href)
                ? (
                    <Link
                        key={key}
                        className={className}
                        to={getRelativeUrl(href)}
                        rel={rel}
                    >
                        {children && children}
                    </Link>
                ) : (
                    <a
                        key={key}
                        className={className}
                        target={target}
                        href={href}
                        rel={rel}
                    >
                        {children && children}
                    </a>
                )
            }
        </>
    )
}
