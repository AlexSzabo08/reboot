import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import Main from "./components/Main"
import Writepost from "./components/Writepost"
import "./css/App.css";

function App() {
/*  const [contracts, setContracts] = useState({
    reboot: null,
    post: null,
    profile: null
  })

  
  useEffect(() => {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const metamask = provider.getSigner()
    

    const RebotABI = [
      'function hasProfile() public view returns(bool)'
    ]

    const PostABI = [
      'function create(string memory _description, string memory _postType, string memory _postHash) public',
      'function addPostTag(uint256 _id, string memory _tag) public',
      'function like(uint256 _id) public returns(bool)',
      ' function getLastPost() public view returns(uint256)',
      'function getDescription(uint256 _id) public view returns(string memory)',
      'function getPostType(uint256 _id) public view returns(string memory)',
      'function getPostHash(uint256 _id) public view returns(string memory)',
      'function getLikes(uint256 _id) public view returns(uint256)',
      'function getTags(uint256 _id) public view returns(uint8)',
      'function getPostTag(uint256 _post, uint8 _tag) public view returns(string memory)'
    ]

    const ProfileABI = [
      'function create(string memory _name) public',
      'function uploadProfilePic(string memory _hash) public',
      'function addBio(string memory _bio) public',
      'function addTag(string memory _str) public',
      'function getUsername() public view returns(string memory)',
      'function getPic() public view returns(string memory)',
      'function getBio() public view returns(string memory)',
      'function getTags() public view returns(uint8)',
      'function getTag(uint8 _id) public view returns(string memory)'
    ]

    const rebotContract = new ethers.Contract('0xC4F53f47ca7129580e52480D9d0F0A7c4Ed8Fc27', 
                                              RebotABI,
                                              metamask)

    const postContract = new ethers.Contract('0x962c6258E3A0c60344c6891F4648e5688F64De87', 
                                              PostABI,
                                              metamask)

    const profileContract = new ethers.Contract('0x301eBd9B201a733B8682a11cE833dc116bb7D205', 
                                              ProfileABI,
                                              metamask)
    setContracts({
      reboot: rebotContract,
      post: postContract,
      profile: profileContract
    })
    
  }, [])*/

  return (
    <div>
<<<<<<< HEAD
      <Main contracts={ contracts }/>
      <Nav profile={contracts.profile}/>
      <Hero />
=======
      <Writepost/>
>>>>>>> 4a8010751463d2b1ba0d50daeec5c085368b94c1
    </div>
  )
}

export default App;
