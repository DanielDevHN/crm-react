import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import NewCustomer from './pages/NewCustomer'
import EditCustomer from './pages/EditCustomer'
import ViewCustomer from './pages/ViewCustomer'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/clientes" element={<Layout />}>
                <Route index element={<Home/>} />
                <Route path="nuevo" element={<NewCustomer/>} />
                <Route path="editar/:id" element={<EditCustomer/>} />
                <Route path=":id" element={<ViewCustomer/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
