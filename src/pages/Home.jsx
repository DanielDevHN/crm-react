import { useEffect } from 'react'

const Home = () => {
  
    useEffect(() => {
        const obtenerClientesAPI = async () => {
            try {
                
            } catch (error) {
                console.log(error)
            }
        }

        obtenerClientesAPI()
    }, [])

  return (
    <div>
        <h1>Home.jsx</h1>
    </div>
  )
}

export default Home
