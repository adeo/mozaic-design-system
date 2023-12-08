import * as React from 'react'
import logoAdeo from '../../images/Adeo_logo.jpg'
import logoLeroyMerlin from '../../images/Leroy_Merlin.jpg'
import * as styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.content}>
        <span>Mozaic, a product made by</span>
        <img src={logoLeroyMerlin} alt="Leroy Merlin" />
        <img src={logoAdeo} alt="Adeo" />
      </p>
    </footer>
  )
}

export default Footer
