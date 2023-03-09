import { IItem } from '~/utils/classes/types'

export default class TreeStore {
  items: IItem[]
  itemMapParents: Map<IItem['parent'], IItem[]> = new Map<IItem['parent'], IItem[]>()
  itemMapChildren: Map<IItem['id'], IItem> = new Map<IItem['id'], IItem>()

  constructor(items: IItem[]) {
    this.items = items

    items.forEach((item) => {
      const itemMapParentValue = this.itemMapParents.get(item.parent) || []
      this.itemMapParents.set(item.parent, [...itemMapParentValue, item])
    })

    items.forEach((item) => this.itemMapChildren.set(item.id, item))
  }

  getAll(): IItem[] {
    return this.items
  }

  getItem(id: IItem['id']): IItem | undefined {
    return this.itemMapChildren.get(id)
  }

  getChildren(id: IItem['id']): IItem[] {
    return this.itemMapParents.get(id) || []
  }

  getAllChildren(id: IItem['id'], itemMapParents = this.itemMapParents): any {
    const allChildrenResult = []
    const children = itemMapParents.get(id) || []
    allChildrenResult.push(...children)
    children.forEach((child) => {
      const subChildren = this.getAllChildren(child.id, itemMapParents)
      allChildrenResult.push(...subChildren)
    })
    return allChildrenResult
  }

  getAllParents(id: IItem['id']): IItem[] {
    const path:IItem[] = []
    let addElement = this.itemMapChildren.get(id)
    if (addElement) {
      addElement = this.itemMapChildren.get(addElement.parent)
    }
    while (addElement) {
      path.push(addElement)
      addElement = this.itemMapChildren.get(addElement.parent)
    }
    return path
  }
}
