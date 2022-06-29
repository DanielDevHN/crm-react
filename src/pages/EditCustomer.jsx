import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from "../components/Formulario"

const EditCustomer = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const obtenerClientesAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
   
            setCargando(!cargando)
        }
        obtenerClientesAPI()
    }, [])

  return (
    <>
        <h1 className="font-black text-3xl text-blue-900">Editar Cliente</h1>
        <p className="mt-3">Utiliza este formulario para editar los datos de un cliente.</p>

        <Form
            cliente={cliente}
        />
    </>
  )
}

export default EditCustomer
