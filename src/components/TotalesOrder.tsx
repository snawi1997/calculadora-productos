import { formatearPrecio } from "../helpers"

interface Prop {
    calcularTotal: number
    enviarOrden: () => void
}



export const TotalesOrder = ({ calcularTotal, enviarOrden} : Prop) => {
    return (
        <div>
            <h2 className=" text-3xl font-bold py-3">Total:</h2>
            <p>El total a pagar: <span className=" font-bold">{formatearPrecio(calcularTotal)}</span> </p>

            <button 
            onClick={enviarOrden}
            className="py-2 mt-5 bg-slate-800 w-full rounded cursor-pointer text-white hover:bg-slate-700 transition">
                Enviar orden
            </button>
        </div>
    )
}
