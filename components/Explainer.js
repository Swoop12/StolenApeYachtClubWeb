import styles from '../styles/Home.module.css'
import demo from '../public/baycdemo.gif'
import cage from '../public/cage.png'
import Image from 'next/image'

export default function Explainer () {
  return (
    <div className={styles.explainerContainer}>
      <div className={styles.stack}>
        <div className={styles.underlay}>
          <Image src={demo} width={500} height={500} />
        </div>
        <div className={styles.overlay}>
          <Image src={cage} width={500} height={500} />
        </div>
      </div>
      <div className={styles.explainerText}>
        <h2>What is this?</h2>
        <p>
          The Stolen Ape Yacht Club is a direct copy of the Bored Ape Yacht
          Club. 10000 Ape NFTS living on the blockchain with verifiable
          uniqueness. The only difference is just the smart contract address (we
          literally copied all of their code we just made ours free...). Which
          begs the question. If we can just steal all the bored apes what does
          it really mean to &quot;own&quot; one of these on the blockchain?
        </p>
        <button>Read More</button>
      </div>
    </div>
  )
}
