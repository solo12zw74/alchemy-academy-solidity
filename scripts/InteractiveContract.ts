import { Contract } from "ethers";
import { Signer } from "@ethersproject/abstract-signer";

export async function getValue(contract: Contract) {
    const value = contract.value();
    return value;
}

export async function setValue(contract: Contract) {
    await contract.modify(5)
}

/**
 * Set the message on the contract using the signer passed in
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @param {ethers.types.Signer} signer - ethers.js signer instance
 * @return {promise} a promise of transaction modifying the `message`
 */
export async function setMessage(contract: Contract, signer: Signer): Promise<void> {
    return await contract.connect(signer).modifyMessage('this is a new message')
}