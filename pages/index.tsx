import Layout from '../components/Layout'
import SocialButtons from '../components/SocialButtons'
import WhatsappButton from '../components/WhatsappButton'
import styles from '../styles/Home.module.css'
import Particles from 'react-tsparticles'
import {particlesOptions} from '../utils/constants'

const Home = () => {
  return (
    <Layout title="DGS Taller | Chapería, Pintura y Mecánica del Automóvil." description="Taller de Chapería, Pintura y Mecánica del Automóvil.">
      <Particles
        options={particlesOptions}
        canvasClassName={'canvasClass'}
        className={styles.canvasClass}
      />
      <div id="homeContainer" 
        className={styles.bgimg}
      >
        <div id="bg_opacity" className={styles.bg_opacity}></div>
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

export default Home