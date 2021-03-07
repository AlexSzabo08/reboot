import { useEffect } from 'react'
import { ethers } from 'ethers'

import Main from "./components/Main"
import "./css/App.css";

function App() {
  /*useEffect(() => {
    async function load () {
    let wallet = ethers.Wallet.fromMnemonic('sea peace bike clock whip caution fiber wrist force pair disease release')
    const provider = new ethers.getDefaultProvider('ropsten')
    wallet = wallet.connect(provider)
    }
    load()
  }, [])*/
  return (
    <div>
      <Main/>
    </div>
  )
}

export default App;
