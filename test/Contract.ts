import { expect } from "chai";
import { ethers } from "hardhat";

describe('Contract', function () {
  async function createDeployment() {
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();
    await contract.deployed();
    return { contract }
  }

  it('should create variable a: true', async () => {
    const { contract } = await createDeployment();
    const a = await contract.callStatic.a();
    expect(a).eq(true);
  });

  it('should create variable b: false', async () => {
    const { contract } = await createDeployment();
    const b = await contract.callStatic.b();
    expect(b).eq(false);
  });
});