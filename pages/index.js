import Head from 'next/head'
import Image from 'next/image'
import KidnapperTitle from '../components/KidnapperTitle'
import Layout from '../components/Layout'
import MintTracker from '../components/MintTracker'
import Explainer from '../components/Explainer'
import styles from '../styles/Home.module.css'
import Why from '../components/Why'
import Decist from '../components/Decist'

export default function Home () {
  return (
    <Layout>
      <div className={styles.container}>
        <KidnapperTitle />
        <MintTracker />
        <Explainer />
        <Why />
        <Decist />
      </div>
    </Layout>
  )
}
