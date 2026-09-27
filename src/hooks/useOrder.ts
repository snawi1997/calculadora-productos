import { useState } from "react"
import type { MenuItems, MenuItemsC } from "../types"




export const useOrder = () => {

    const [order, setOrder] = useState<MenuItemsC[]>([])
    const [total] = useState(0)
  

    const agregarOrder = (item: MenuItems) => {

        const exist = order.some((pro) => pro.id === item.id)
        if (exist) {
            const product = order.find((pro) => pro.id === item.id)
            if (product) {
                product.cantidad = product.cantidad + 1
                const nuevoCart = [...order]
                setOrder(nuevoCart)
            }
        } else {
            setOrder([...order, { ...item, cantidad: 1 }]) // se agrega cantidad
        }
    }


    //elimina del order
    const deleteOrder = (itemId: number) => {
        const producto = order.find((pro) => pro.id === itemId)
        if (producto) {
            setOrder((preOrder) => preOrder.filter((pre) => pre.id !== producto.id))
        }

    }

    //subtotal
    const calcularTotal = order.reduce((acumulado, can ) => acumulado + (can.cantidad * can.price), 0)

    //enviar orden
    const enviarOrden = () => {
        setOrder([])
    }
   

    return {
        agregarOrder,
        order,
        setOrder,
        deleteOrder,
        calcularTotal,
        total,
        enviarOrden
        
    }
}