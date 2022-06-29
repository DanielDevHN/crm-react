import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const ViewCustomer = () => {

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
        cargando ? <Spinner /> : 
            Object.keys(cliente).length === 0 ? 
            <p>No hay Resultados</p>: 
            (

                <div className="text-3xl text-gray-700">

                    <>
                        <h1 className="font-black text-3xl text-blue-900">Detalles del Cliente : {cliente.nombre}</h1>
                        <p className="mt-3 text-xl font-semibold">Información del Cliente</p>

                        <p className="text-2xl text-gray-600  mt-10">
                            <span className="text-gray-800  uppercase font-bold">Cliente: </span>
                            {cliente.nombre}
                        </p>
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className=" text-gray-800 uppercase font-bold">Email: </span>
                            {cliente.email}
                        </p>
                        {cliente.telefono && (
                            <p className="text-2xl text-gray-600 mt-4">
                                <span className="text-gray-800  uppercase font-bold">Teléfono: </span>
                                {cliente.telefono}
                            </p>
                        )}

                        <p className="text-2xl text-gray-600 mt-4">
                            <span className=" text-gray-800 uppercase font-bold">Empresa: </span>
                            {cliente.empresa}
                        </p>

                        {cliente.notas && (
                            <p className="text-2xl text-gray-600 mt-4">
                                <span className=" text-gray-800 uppercase font-bold">Notas: </span>
                                {cliente.notas}
                            </p>
                        )}
                    </>
                </div>
            )
        )
    }

export default ViewCustomer
