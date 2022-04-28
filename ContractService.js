import { ethers } from 'ethers'
import abiJSON from './artifacts/StolenApeYachtClub.json'

class ContractService {
  constructor () {
    const provider = ethers.getDefaultProvider('https://polygon-rpc.com/')
    this.contract = new ethers.Contract(
      '0x34b103b2771bec76e189aa5ff0a2a9beba01d32b',
      abiJSON.abi,
      provider
    )
  }

  async fetchNumberMinted () {
    const currentNumberMinted = await this.contract.totalSupply()
    return currentNumberMinted.toNumber()
  }

  async mintNewApe (count, signer) {
    const signerContract = this.contract.connect(signer)
    console.log(count)
    const apeTX = await signerContract.mintApe(count)
    return apeTX
  }
}

const service = new ContractService()

export default service
