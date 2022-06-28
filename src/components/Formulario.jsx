import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const Formulario = () => {

  const nuevoClienteSchema = Yup.object().shape({
          nombre: Yup.string().required('El nombre es requerido'),
          empresa: Yup.string().required('La empresa es requerida'),
          email: Yup.string().email('El email es inválido').required('El email es requerido'),
          telefono: Yup.string().required('El teléfono es requerido'),
          notas: Yup.string()
  })

  const initialValues =  (valores) => {
    console.log(valores)
  }


  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md 
    md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase
        text-center">Agregar Cliente</h1>

      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          notas: ''
        }}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {() => (
          
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
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-bold mb-2"
              htmlFor="notas"
            >Observaciones:</label>
            <Field
              as = "textarea"
              id="notas"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Escriba algo sobre el Cliente"
              name="notas"
            />

            <input 
              type="submit"
              value="Agregar Cliente"
              className="mt-5 w-full p-3 bg-blue-800 
              hover:bg-blue-700 text-white font-bold 
              uppercase rounded-md text-lg cursor-pointer"
            />
          </div>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default Formulario
