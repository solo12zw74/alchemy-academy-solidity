import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

async function deployContract() {
  const Contract = await ethers.getContractFactory("Contract");
  const contract = await Contract.deploy();
  await contract.deployed();
  return { contract }
}

describe('Contract', function () {

  it('should create variable t: true', async () => {
    const { contract } = await loadFixture(deployContract);
    const t = await contract.callStatic.t();
    expect(t).eq(true);
  });

  it('should create variable f: false', async () => {
    const { contract } = await loadFixture(deployContract);
    const f = await contract.callStatic.f();
    expect(f).eq(false);
  });
});

describe('Contract', function () {

  it('should create variable a which is less than 256', async () => {
    const { contract } = await loadFixture(deployContract);
    const a = await contract.callStatic.a();
    assert.isAtMost(a, 255);
  });

  it('should create variable b which is greater than or equal to 256', async () => {
    const { contract } = await loadFixture(deployContract);
    const b = await contract.callStatic.b();
    assert.isAtLeast(b, 256);
  });

  it('should create variable sum which equals a and b together', async () => {
    const { contract } = await loadFixture(deployContract);
    const a = await contract.callStatic.a();
    const b = await contract.callStatic.b();
    const sum = await contract.callStatic.sum();
    assert.equal(sum.toNumber(), a + b);
  });
});