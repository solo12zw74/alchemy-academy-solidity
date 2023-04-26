// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {
    bool public t = true;
    bool public f;

    uint8 public a;
    uint16 public b = 257;
    uint public sum = a + b;

    int8 public c = 10;
    int8 public d = -15;

    int8 public difference = c - d;

    bytes32 public msg1 = "Hello World";
    string public msg2 = "Here is the long string which requires more than 32 bytes to store it's value";

}
