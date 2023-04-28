import { assert } from 'chai';
import { getValue, setValue, setMessage } from '../scripts/InteractiveContract';
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

describe('InteractiveContract', function () {
    let interactiveContract: Contract;
    before(async () => {
        const Contract = await ethers.getContractFactory("InteractiveContract");
        interactiveContract = await Contract.deploy(0);
        await interactiveContract.deployed();
    });

    it('should set the value', async () => {
        await setValue(interactiveContract);
        const value = await interactiveContract.value();
        assert(value.gt(0), "Expecting value to be modified. Still set at 0!");
    });
});

describe('InteractiveContract', function () {
    let interactiveContract: Contract;
    before(async () => {
        const Contract = await ethers.getContractFactory("InteractiveContract");
        interactiveContract = await Contract.deploy(0);
        await interactiveContract.deployed();
    });

    it('should set the value', async () => {
        await setMessage(interactiveContract, ethers.provider.getSigner(1));
        const message = await interactiveContract.message();
        assert.notEqual(message, "", "Expecting message to be modified. Still set to an empty string!");
    });
});
