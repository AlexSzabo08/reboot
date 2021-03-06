// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
import "./Profile.sol";
import "./Post.sol";

contract Reboot is Profile, Post {
    function hasProfile() public view returns(bool){
        if(bytes(Profile.profile[msg.sender].name).length > 0)
            return true;
        else
            return false;
    }
}