import React from 'react'

const Cliente = ({cliente}) => {

  const { nombre, empresa, email, telefono, notas, id } = cliente

  return (
    <tr className="border hover:bg-gray-50">
        <td className="p-3">{nombre}</td>
        <td className="p-3">
            <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
            <p><span className="text-gray-800 uppercase font-bold">Tel.: </span>{telefono}</p>
        </td>
        <td className="p-3">{empresa}</td>
        <td className="p-3">
            <button 
                type="button"
                className="bg-green-600 hover:bg-green-700 block 
                w-full text-white font-bold p-2 uppercase text-xs rounded"
            >Ver</button>

            <button 
                type="button"
                className="bg-blue-600 hover:bg-blue-700 block mt-3
                w-full text-white font-bold p-2 uppercase text-xs rounded"
            >Editar</button>
               
            <button 
                type="button"
                className="bg-red-600 hover:bg-red-700 block mt-3
                w-full text-white font-bold p-2 uppercase text-xs rounded"
                >Eliminar</button>
        </td>
    </tr>
  )
}

export default Cliente
