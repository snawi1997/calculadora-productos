import type { MenuItems } from "../types"



interface MenuPrpps {
    menu: MenuItems
    agregarOrder: (item: MenuItems) => void
}

export const Menu = ({menu, agregarOrder} : MenuPrpps) => {
    const { name, price} = menu


  return (
    <button onClick={() => agregarOrder(menu)} className="flex justify-between w-full border-blue-500 border-2 p-3 m-2 rounded hover:bg-blue-300 cursor-pointer transition">
        <div>
             <h1>{name}</h1>
        </div>
       <div>
        <p className=" font-bold">${price}</p>
       </div>
        
    </button>
  )
}
