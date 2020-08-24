import React from 'react'
import Layout from '../components/Layout'
import Particles from 'react-tsparticles'
import {particlesOptions} from '../utils/constants'

const NotFoundPage = () => {

  return (
    <Layout title="DGS" description="Talleres DGS">
      <h1 style={{color: 'white'}}>Página no encontrada.</h1>
      <p style={{color: 'white'}}>Acabas de llegar a una ruta que no existe ... Si venís al taller, seguro podemos arreglarlo 😉</p>
      <Particles params={particlesOptions}/>
    </Layout>
  )
}

export default NotFoundPage
