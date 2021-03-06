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
        uint256 like;
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
            post[_id].like += 1;
            return true;
        }
        return false;
    }
    
    
}