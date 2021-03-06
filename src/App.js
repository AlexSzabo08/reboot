import { useEffect } from 'react'
import { ethers } from 'ethers'

<<<<<<< HEAD
import Hero from './components/Hero'
import Post from './components/Post' 
=======
import Hero from './components/Hero' 
import Nav from './components/Nav'
>>>>>>> ca4a26a33f27ee2cca7beed0ec32062f3d6aeb1d
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
<<<<<<< HEAD
      <Post/>
=======
      <Nav />
      <Hero/>
>>>>>>> ca4a26a33f27ee2cca7beed0ec32062f3d6aeb1d
    </div>
  )
}

export default App;
