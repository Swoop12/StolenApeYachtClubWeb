import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import contractService from '../ContractService'
import styles from '../styles/Home.module.css'

export default function MintTracker () {
  const [numberMinted, setNumberMinted] = useState(0)

  const loadNumberMinted = async () => {
    const count = await contractService.fetchNumberMinted()
    setNumberMinted(count)
  }

  const switchNetworkToPolygon = async () => {
    const polygonNetwork = {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: 'Polygon Mainnet',
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
      },
      rpcUrls: ['https://polygon-rpc.com/'],
      blockExplorerUrls: ['https://polygonscan.com/']
    }
    try {
      const ethereum = window.ethereum
      if (!ethereum) {
        alert('Please use an ethereum enabled Browser.')
      } else {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [polygonNetwork]
        })
      }
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }

  const onMintButtonTapped = async () => {
    const { ethereum } = window
    if (ethereum) {
      await ethereum.enable()
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const numberToMint = prompt(
        'How many would you like? (Max 20 per transaction)'
      )
      if ((numberToMint, signer)) {
        const mintTX = await contractService.mintNewApe(
          parseInt(numberToMint),
          signer
        )
        console.log(mintTX)
      } else {
        alert('Please make sure you are using a Metamask enabled browser')
      }
    } else {
      alert('Please make sure you are using a Metamask enabled browser')
    }
  }

  useEffect(() => {
    switchNetworkToPolygon()
    loadNumberMinted()
  }, [])

  return (
    <div className={styles.mintTrackerContainer}>
      <h2>{numberMinted} / 10000</h2>
      <h2>Minted</h2>
      <div className={styles.flex}>
        <button onClick={onMintButtonTapped}>Mint Yours</button>
        <a href='https://opensea.io/collection/stolenapeyachtclub-1'>
          <button className={styles.openSeaButton}>Open Sea</button>
        </a>
      </div>
    </div>
  )
}
