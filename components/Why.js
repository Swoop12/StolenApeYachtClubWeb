import styles from '../styles/Home.module.css'
import Image from 'next/image'
import hero from '../public/sayc-hero.webp'

export default function Why () {
  return (
    <div className={styles.explainerContainer}>
      <div className={styles.explainerText}>
        <h2>Why Did You Make This?</h2>
        <p>
          Hopefully to get people to ask better questions about what blockchain
          &quot;ownership&quot; really means and who ends up enforcing that
          &quot;ownership&quot; when push comes to shove. Or you know... Some
          men just want to watch the world burn.
        </p>
      </div>
      <Image src={hero} width={595} height={371} />
    </div>
  )
}
