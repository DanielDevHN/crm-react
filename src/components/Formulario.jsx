import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from './Spinner'

const Formulario = ({ cliente, cargando }) => {

  const navigate = useNavigate()

  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(20, 'El nombre debe tener menos de 20 caracteres')
      .required('El nombre es requerido'),
    empresa: Yup.string()
      .required('La empresa es requerida'),
    email: Yup.string()
      .email('El email es inválido')
      .required('El email es requerido'),
    telefono: Yup.number()
      .positive('número no válido')
      .integer('número no válido')
      .typeError('El teléfono debe ser un número')
  })

  const handleSubmit = async (valores) => {
    try {
      let respuesta
      if(cliente.id) {
          //Editando un registro
            const url = `${import.meta.env.VITE_API_URL}/${cliente.id}`
            respuesta = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
      } else {
          // Crear nuevo cliente
          const url = import.meta.env.VITE_API_URL
          respuesta = await fetch(url, {
              method: 'POST',
              body: JSON.stringify(valores),
              headers: {
                'Content-Type': 'application/json'
              }
          })
      }
        await respuesta.json()
        navigate('/clientes')
        
    } catch (error) {
      console.log(error)
    }
  }


  return (
    cargando ? <Spinner /> : 
    (
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md 
        md:w-3/4 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase
        text-center">{cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}</h1>

        <Formik
          initialValues={{
            nombre: cliente?.nombre ?? "",
            empresa: cliente?.empresa ?? "",
            email: cliente?.email ?? "",
            telefono: cliente?.telefono ?? "",
            notas: cliente?.notas ?? ""
          }}
          enableReinitialize={true}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values)

            resetForm()
          }}
          validationSchema={nuevoClienteSchema}
        >
          {({ errors, touched }) => {
            return (

              <Form
                className="mt-10"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="nombre"
                  >Nombre:</label>
                  <Field
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                  />

                  {errors.nombre && touched.nombre ? (
                    <Alerta>{errors.nombre}</Alerta>
                  ) : null}

                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="empresa"
                  >Empresa:</label>
                  <Field
                    id="empresa"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Empresa del Cliente"
                    name="empresa"
                  />

                  {errors.empresa && touched.empresa ? (
                    <Alerta>{errors.empresa}</Alerta>
                  ) : null}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="email"
                  >E-mail:</label>
                  <Field
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del Cliente"
                    name="email"
                  />

                  {errors.email && touched.email ? (
                    <Alerta>{errors.email}</Alerta>
                  ) : null}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="telefono"
                  >Teléfono:</label>
                  <Field
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                  />

                  {errors.telefono && touched.telefono ? (
                    <Alerta>{errors.telefono}</Alerta>
                  ) : null}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="notas"
                  >Observaciones:</label>
                  <Field
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Escriba algo sobre el Cliente"
                    name="notas"
                  />

                  <input
                    type="submit"
                    value={cliente?.nombre ? 'Actualizar Cliente' : 'Agregar Cliente'}
                    className="mt-5 w-full p-3 bg-blue-800 
                  hover:bg-blue-700 text-white font-bold 
                  uppercase rounded-md text-lg cursor-pointer"
                  />
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    )
  )
}

Formulario.defaultProps = {
  cliente: {},
  cargando: false
}
export default Formulario
