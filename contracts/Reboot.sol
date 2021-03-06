// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Reboot {
    string variabila = "lean";
    uint8 nr = 1;

    function str(string memory _string) public view returns(string memory) {
        return _string;
    }

    function nmb(uint8 _nr) public {
        nr = _nr;
    }
}