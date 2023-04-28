// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract InteractiveContract {
    uint public value;

    constructor(uint _value) {
        value = _value;
    }

    function modify(uint _value) external {
        value = _value;
    }
}
