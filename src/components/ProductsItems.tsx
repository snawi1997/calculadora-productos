import type { MenuItemsC } from "../types"
import { formatearPrecio } from '../helpers/index';


interface Prop {
    order: MenuItemsC[]
    deleteOrder : (itemId: number) => void
}

export const ProductsItems = ({ order, deleteOrder }: Prop) => {

    return (
        <div>
            <h1 className=" font-bold text-4xl text-center pb-10">Consumo</h1>
            <div>
                {order.length > 0 ?

                    order.map((ord) => (
                        <div key={ord.id} className="flex justify-between items-center border-t-2 border-gray-200 py-5">
                            <div className="">
                                <p className=" text-2xl">{ord.name} - {formatearPrecio(ord.price)}</p>
                                <p className=" font-bold">Cantidad: {ord.cantidad} - {formatearPrecio(ord.price * ord.cantidad)}</p>
                            </div>


                            <button 
                            onClick={ () => deleteOrder(ord.id)}
                            className="w-8 h-8 rounded-full bg-red-500 text-white cursor-pointer hover:bg-red-400">x</button>
                        </div>
                    ))

                    : (
                        <p className="text-center py-5 text-2xl">No hay productos, selecciona uno......</p>
                    )}
            </div>
        </div>
    )
}
