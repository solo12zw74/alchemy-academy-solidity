import { Contract } from "ethers";

export async function getValue(contract: Contract) {
    const value = contract.value();
    return value;
}

export async function setValue(contract: Contract) {
    contract.modify(5)
}