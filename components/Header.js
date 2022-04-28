import Image from 'next/image'
import styles from '../styles/Home.module.css'

import twitter from '../public/SocialLogos/Twitter.svg'
import instagram from '../public/SocialLogos/instagram.svg'
import discord from '../public/SocialLogos/Discord.svg'
import openSea from '../public/SocialLogos/OpenSea.svg'
import etherScan from '../public/SocialLogos/Etherscan.svg'
import youTube from '../public/SocialLogos/YouTube.png'
import logo from '../public/SAYCLogo.png'

let socialHandleSize = 32

export default function Header () {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image src={logo} width={200} height={53.33} />
      </div>
      <div className={styles.handlesContainer}>
        <a href='https://twitter.com/bombheadsnfts'>
          <Image
            width={socialHandleSize}
            height={socialHandleSize}
            className={styles.headerImg}
            src={twitter}
            alt='Twitter'
          />
        </a>
        <a href='https://www.instagram.com/bombheadsnfts/'>
          <Image
            width={socialHandleSize}
            height={socialHandleSize}
            className={styles.headerImg}
            src={instagram}
            alt='Instagram'
          />
        </a>
        <a href='https://discord.gg/gJP5d3fhWa'>
          <Image
            width={socialHandleSize}
            height={socialHandleSize}
            className={styles.headerImg}
            src={discord}
            alt='Discord'
          />
        </a>
        <a href='https://opensea.io/collection/stolenapeyachtclub-1'>
          <Image
            width={socialHandleSize}
            height={socialHandleSize}
            className={styles.headerImg}
            src={openSea}
            alt='OpenSea'
          />
        </a>
        <a href='https://polygonscan.com/address/0x34b103b2771bec76e189aa5ff0a2a9beba01d32b'>
          <Image
            width={socialHandleSize}
            height={socialHandleSize}
            className={styles.headerImg}
            src={etherScan}
            alt='EtherScan'
          />
        </a>
        <a href='https://www.youtube.com/watch?v=V0vaAt07iy4'>
          <Image
            width={socialHandleSize}
            height={socialHandleSize}
            className={styles.headerImg}
            src={youTube}
            alt='YouTube'
          />
        </a>
      </div>
    </div>
  )
}
