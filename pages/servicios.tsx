import Layout from '../components/Layout'
import SocialButtons from '../components/SocialButtons'
import WhatsappButton from '../components/WhatsappButton'
import styles from '../styles/Home.module.css'
import Particles from 'react-tsparticles'
import {particlesOptions} from '../utils/constants'

const Servicios = () => {
  return (
    <Layout title="DGS Taller | Chapería, Pintura y Mecánica del Automóvil." description="Taller de Chapería, Pintura y Mecánica del Automóvil.">
      <Particles
        options={particlesOptions}
        canvasClassName={'canvasClass'}
        className={styles.canvasClass}
      />
      <div id="homeContainer">
        <div style={{textAlign: 'center'}}>
          <h1 className={styles.h1} style={{color: 'white'}}>Servicios del Automóvil</h1>
            <ol style={{padding: 0}}>
              <li>
                <p style={{color: 'white'}}>👨🏻‍🏭Chapería</p>
              </li>
              <li>
                <p style={{color: 'white'}}>👨🏻‍🎨🎨Pintura</p>
              </li>
              <li>
                <p style={{color: 'white'}}>🛠🔩Mecánica Integral</p>
              </li>
            </ol>
        </div>
        <div className={styles.bottomCenter}>
          <SocialButtons />
          <p className={styles.wip}>Copyright © 2020 - DGS</p>
        </div>
        <div className={styles.bottomRight}>
          <WhatsappButton />
        </div>
      </div>
    </Layout>
  )
}

export default Servicios