// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Profile {
    struct ProfileStruct {
        string name;
        string pic;
        string bio;
        uint8  tags;
    }
    
    mapping(address => ProfileStruct) public profile;
    
    mapping(address => mapping(uint8 => string)) private tag;
    
    function create(string memory _name) public {
        ProfileStruct memory _profile;
        _profile.name = _name;
        _profile.tags = 0;
        profile[msg.sender] = _profile;
    }
    
    function uploadProfilePic(string memory _hash) public {
        profile[msg.sender].pic = _hash;
    }
    
    function addBio(string memory _bio) public {
      profile[msg.sender].bio = _bio;
    }
    
    
    function addTag(string memory _str) public {
        ProfileStruct memory _profile;
        _profile = profile[msg.sender];
        require(_profile.tags < 255);
        _profile.tags += 1;
        tag[msg.sender][_profile.tags] = _str;
    }
    
}

