declare module '*.svg' {
    const ReactComponent: React.FC<any>
    const content: string

    export { ReactComponent }
    export default content
}

declare module '*.jpg'
