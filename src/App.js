import { useEffect } from 'react'
import { ethers } from 'ethers'

import './App.css'

function App() {
  useEffect(() => {
    async function load () {
    let wallet = ethers.Wallet.fromMnemonic('sea peace bike clock whip caution fiber wrist force pair disease release')
    const provider = new ethers.getDefaultProvider('ropsten')
    wallet = wallet.connect(provider)

    const ABI = [
      'function nmb(uint8 _nr) public',
      'function str(string memory _string) public view returns(string memory)'
    ]
    const contract = new ethers.Contract('0xc5F13aE40e06114eDe1d250D526838Cc7D2E85D4',
                                          ABI,
                                          provider)

    const data = await contract.str('xd')
    console.log(data)
    }
    load()
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
