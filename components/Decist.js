import styles from '../styles/Home.module.css'
import bayc from '../public/bayc-footer.webp'
import Image from 'next/image'

export default function Decist () {
  const mailHREF = () => {
    let mailTo = 'stolenapeyachtclub@gmail.com'
    let subject = 'I Love Centralization'
    let body =
      'I <INSERT NAME HERE> change my mind about hyping up a decentralized internet because it no longer serves my intrestests right now.  I would like you to censor you and stop you from selling these stolen apes.  I am prepared to use the power of centralized marketplaces like OpenSea and centralized governments to get you to stop.   At the end of the day, I only think Decentralization is a positive when it makes me money.  Thank you!'
    return `mailto:${mailTo}?subject=${subject}&body=${body}`
  }

  return (
    <div className={styles.explainerContainer}>
      <Image src={bayc} width={500} height={500} />
      <div className={styles.explainerText}>
        <h2>Sue Me. Please.</h2>
        <p>
          Are you the proud owner of one of the original Apes or do you work at
          Yuga Labs? Please send me a cease and decist order. I&apos;m begging
          you. Because if you do, you are effectively admitting that the
          blockchain doesn&apos;t infact imbue you with magical
          &quot;ownership&quot; powers and instead the only thing you really own
          is Bored Ape Intellectual property. Which is maintained by a good old
          centralized authority called the US Governement. To make this easier
          for you I&apos;ve included a button with a predrafted email you can
          send to us. Please also report me on OpenSea and in doing so admit
          that you need large centralized marketmakers to moderate spammers like
          me. Or cary on with the decentralization gospel and let these stolen
          apes run free 😄
        </p>
        <a href={mailHREF()}>
          <button>Send Cease and Decist</button>
        </a>
      </div>
    </div>
  )
}
