declare module "*.png" {
  const value: string
  export default value
}

declare module "*.jpg" {
  const value: string
  export default value
}

declare module "*.svg" {
  const content: React.FC<{
    style?: { [key: string]: string }
    className?: string
  }>
  export default content
}

declare module "*.woff2" {
  const value: string
  export default value
}
