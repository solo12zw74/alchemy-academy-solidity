import { Contract } from "ethers";
/**
 * Transfer funds on the contract from the current signer 
 * to the friends address
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @param {string} friend - a string containing a hexadecimal ethereum address
 * @return {promise} a promise of the transfer transaction
 */
export default async function transfer(contract: Contract, friend: string): Promise<any> {
    contract.transfer(friend, 300)
}