import { menuItems } from "../data/db"
import type { MenuItems, MenuItemsC } from "../types"
import { Menu } from "./Menu"
import { ProductsItems } from "./ProductsItems"
import { TotalesOrder } from "./TotalesOrder"

interface agregarProp {
    agregarOrder: (item: MenuItems) => void
    order : MenuItemsC[]
    deleteOrder : (itemId: number) => void
    calcularTotal: number
    enviarOrden: () => void
    
}


export const Main = ({ agregarOrder, order, deleteOrder, calcularTotal, enviarOrden  } : agregarProp) => {
    return (
        <main className=" container mx-auto mt-5 grid md:grid-cols-2 px-2">
            <div className="px-2">
                <h1 className="font-bold text-4xl text-center">Menu</h1>

                {menuItems.map((menu) => (
                    <Menu
                        key={menu.id}
                        menu={menu}
                        agregarOrder={agregarOrder}
                    />
                ))}
            </div>
            <div className="p-2 rounded-xl border border-slate-200 bg-white shadow-sm mx-4">
                <ProductsItems
                deleteOrder = {deleteOrder}
                order = {order}
                />
                {order.length > 0 ? <TotalesOrder enviarOrden = {enviarOrden} calcularTotal = {calcularTotal}/> : ''}
            </div>
        </main>
    )
}
