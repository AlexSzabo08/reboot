import { React, useState, useEffect } from "react";
import "../css/Main.css";
import Nav from "./Nav";
import Post from "./Post";
import Photo from "./Photo";
export default function Hero() {
  const [signUp, toggleSignUp] = useState(false);
  function toggle() {
    toggleSignUp(true);
  }

  useEffect(() => {
    return async () => {
      const post = props.contracts.posts
      let i = await post.getLastPost()
      
      let posts = []
      while(i > 0){
        let description = await post.getDescription(i)
        let postType = await post.getPostType(i)
        let postHash = await post.getPostHash(i)
        let likes = await post.getLikes(i)
        posts.push(<Post description={description} postType={postType}
        postHash={postHash} likes={likes}/>)
        i --;
      }

    }
  }, [])

  return (
    <div>
      <Nav />
      <div className="background">
        <div className="wrapper-feed">
          <div className="doi">
              <Post/> 
              <Post/>
          </div>
        </div>
      </div>
    </div>
  );
}
