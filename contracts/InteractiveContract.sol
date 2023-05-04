// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract InteractiveContract {
    uint public value;
    address owner;
    string public message;

    constructor(uint _value) {
        value = _value;
        owner = msg.sender;
    }

    function modify(uint _value) external {
        value = _value;
    }

    function modifyMessage(string calldata _message) external {
        require(msg.sender != owner, "Owner cannot modify the message!");
        message = _message;
    }
}
