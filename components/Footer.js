import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/SAYCLogo.png'

export default function Footer () {
  return (
    <div>
      <hr />
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <Image src={logo} width={200} height={53.33} />
        </div>
      </div>
    </div>
  )
}
