export namespace Navigation {
  interface TreeItemTypes {
    className?: string
    imageSrc?: string | null
    hidden?: boolean
    label: string
    roles?: string[]
    route: string
    tree?: TreeItemTypes[]
  }
}
