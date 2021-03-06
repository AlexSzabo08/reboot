import { useEffect } from 'react'
import { ethers } from 'ethers'

import Hero from './components/Hero' 
import "./css/App.css";

function App() {
  useEffect(() => {
    async function load () {
    let wallet = ethers.Wallet.fromMnemonic('sea peace bike clock whip caution fiber wrist force pair disease release')
    const provider = new ethers.getDefaultProvider('ropsten')
    wallet = wallet.connect(provider)
    }
    load()
  }, [])
  return (
    <div>
      <Hero/>
    </div>
  );
}

export default App;