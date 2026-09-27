
export interface MenuItems {
    id: number
    name: string
    price: number
}

export interface MenuItemsC extends MenuItems {
    cantidad: number
}