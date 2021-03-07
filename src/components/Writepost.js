import React from "react";
import "../css/Writepost.css";
import IPFS from 'ipfs-api'
export default function hero() {/*
  const uploadFile = async (event) =>{
    const [state, setstate] = useState('')
    const [postType,setPostType] = useState('')
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    await reader.onload()
    const buffer = Buffer(reader.result)
    
    const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'})
    ipfs.files.add(buffer, (error, result) => {
      if(error){
        console.log(error)
        return
      }
      else 
        const post = props.contracts.post.create(state,postType,result)
    })
    

  }
*/
  function input(event){
    //setstate(event.target.value)
  }
  return (
    <div className="background">
      <div className="postWindow">
        <p className="newPostTitle">
          <b>New post</b>
        </p>
        <hr></hr>
        <div className="bar">
          <div className="paralelogram">
            <p className="paralelogramText">Photo</p>
          </div>
          <div className="paralelogramButton">
            <p className="paralelogramText">Video</p>
          </div>
          <div className="paralelogramButton">
            <p className="paralelogramText">Text</p>
          </div>
          <div className="paralelogramButton">
            <p className="paralelogramText">Audio</p>
          </div>
        </div>
        <hr className="invisible"></hr>
        <input /*value={state} */onChange={input} className="descriptionInput" placeholder="Write a short description..."></input>
        <div className="paralelogram">
          <p className="paralelogramText"><input type="file" onClick/>Upload your photo</p>
        </div>
      </div>
    </div>
  );
}