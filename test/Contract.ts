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

  it('should create two variables, one positive and one negative', async () => {
    const { contract } = await loadFixture(deployContract);
    const c = await contract.callStatic.c();
    const d = await contract.callStatic.d();

    const cPositive = c > 0 && d < 0;
    const dPositive = d > 0 && c < 0;
    assert(cPositive || dPositive, "Declare variables c and d where one is positive (above zero) and the other is negative (below zero)");
  });

  it('should find the absolute difference between the two variables', async () => {
    const { contract } = await loadFixture(deployContract);
    const c = await contract.callStatic.c();
    const d = await contract.callStatic.d();
    const difference = await contract.callStatic.difference();
    assert.equal(difference, Math.abs(c - d));
  });

  it('should create a msg1 as bytes32 with hello world', async () => {
    const { contract } = await loadFixture(deployContract);
    const msg1 = await contract.callStatic.msg1();
    const ascii = ethers.utils.parseBytes32String(msg1);
    assert(/hello world/i.test(ascii), "Could not find 'Hello World' in your msg1!");
  });

  it('should create a msg2 as string which requires more than 32 bytes', async () => {
    const { contract } = await loadFixture(deployContract);

    const msg2 = await contract.callStatic.msg2();
    assert.isAtLeast(Buffer.byteLength(msg2, 'utf8'), 32);
  });
  
  it('should create four foods', async () => {
    const { contract } = await loadFixture(deployContract);

    for (let i = 1; i <= 4; i++) {
      const food = await contract.callStatic[`food${i}`]();
      assert.isAtLeast(food, 0);
    }
  });
});