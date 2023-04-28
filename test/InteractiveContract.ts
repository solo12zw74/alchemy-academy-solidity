import { assert } from 'chai';
import { getValue } from '../scripts/InteractiveContract';
import { Contract } from "ethers";
import { ethers } from 'hardhat';

describe('InteractiveContract', function () {
    const random = Math.floor(Math.random() * 1000);
    let interactiveContract: Contract;
    before(async () => {
        const InteractiveContract = await ethers.getContractFactory("InteractiveContract");
        interactiveContract = await InteractiveContract.deploy(random);
        await interactiveContract.deployed();
    });

    it('should get the value', async () => {
        const value = await getValue(interactiveContract);
        assert.equal(value, random);
    });
});
