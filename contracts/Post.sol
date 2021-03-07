// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
import "./Profile.sol";

contract Post is Profile{
    
    uint256 postId = 0;
    
    struct PostStruct{
        address owner;
        string description;
        string postType;
        string postHash;
        uint256 likes;
        uint8 tags;
    }
    
    //post[id]
    mapping(uint256 => PostStruct) post;
    
    mapping(address => mapping(uint256 => bool)) liked;
    
    mapping(uint256 => mapping(uint8 => string)) private tag;
    
    function create(string memory _description, string memory _postType, string memory _postHash) public {
        PostStruct memory _post;
        _post.owner = msg.sender;
        _post.description = _description;
        _post.postType = _postType;
        _post.postHash = _postHash;
        _post.tags = 0;
        postId += 1;
        post[postId] = _post; 
    }
    
    
    function addPostTag(uint256 _id, string memory _tag) public {
        require(post[_id].owner == msg.sender);
        require(post[_id].tags < 5);
        post[_id].tags += 1;
        tag[_id][post[_id].tags] = _tag;       
    }
    
    function like(uint256 _id) public returns(bool){
        if(!liked[msg.sender][_id]){
            liked[msg.sender][_id] = true;
            post[_id].likes += 1;
            return true;
        }
        return false;
    }
    
    function getLastPost() public view returns(uint256){
        return postId;
    }
    
    function getDescription(uint256 _id) public view returns(string memory){
        return post[_id].description;
    }
    
    function getPostType(uint256 _id) public view returns(string memory){
        return post[_id].postType;
    }
    
    function getPostHash(uint256 _id) public view returns(string memory){
        return post[_id].postHash;
    }
    
    function getLikes(uint256 _id) public view returns(uint256){
        return post[_id].likes;
    }
    
    function getTags(uint256 _id) public view returns(uint8){
        return post[_id].tags;
    }
    
    function getPostTag(uint256 _post, uint8 _tag) public view returns(string memory){
        return tag[_post][_tag];
    }
    
    
}