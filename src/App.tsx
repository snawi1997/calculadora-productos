
import { Header } from './components/Header'
import { Main } from './components/Main'
import { useOrder } from './hooks/useOrder'

function App() {


const {agregarOrder, order, deleteOrder, calcularTotal, enviarOrden} = useOrder()




  return (
    <>
      <Header />
      <Main
      agregarOrder = {agregarOrder}
      order = {order}
      deleteOrder = {deleteOrder}
      calcularTotal = {calcularTotal}
      enviarOrden = {enviarOrden}
    
      />
    </>

  )
}

export default App
