import { Image } from './CoreTypes'

export type Navbar = {
    title: string
}

export type Usp = {
    date: string
}

export type Header = {
    className?: string
    height?: number
    width?: number
    image?: Image
    alt?: string
    usePicture?: boolean
    download?: boolean
    title?: string
}

export type CoverSectionImage = {
    id: string
    backgroundImageDesktop: Image | null
    backgroundImageMobile: Image | null
    description: string | null
    headline: string
    primaryButtonLink: string | null
    primaryButtonText: string | null
    secondaryButtonLink: string | null
    secondaryButtonText: string | null
}