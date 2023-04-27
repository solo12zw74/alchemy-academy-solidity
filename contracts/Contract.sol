// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {
    enum Foods {
        Apple,
        Pizza,
        Bagel,
        Banana
    }
    
    bool public t = true;
    bool public f;

    uint8 public a;
    uint16 public b = 257;
    uint public sum = a + b;

    int8 public c = 10;
    int8 public d = -15;

    uint public x;

    int8 public difference = c - d;

    bytes32 public msg1 = "Hello World";
    string public msg2 =
        "Here is the long string which requires more than 32 bytes to store it's value";

    Foods public food1 = Foods.Apple;
    Foods public food2 = Foods.Banana;
    Foods public food3 = Foods.Pizza;
    Foods public food4 = Foods.Bagel;

    constructor(uint _x) {
        x = _x;
    }

    function increment() external {
        x = x + 1;
    }

    function add(uint value) view external returns (uint result) {
        result = x + value;
    }
}
