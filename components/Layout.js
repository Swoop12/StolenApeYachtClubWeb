import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout ({ children }) {
  return (
    <div>
      <Head>
        <title>Stolen Ape Yacht Club</title>
        <meta name='dscription' content='The secret fatal flaw in Web3 ' />
        <meta property='og:title' content='Stole Ape Yacht Club' />
        <link rel='icon' href='/Logo.png' />
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
