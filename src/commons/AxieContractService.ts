const Web3 = require('web3');
import { AXIE } from "../config/axie";
import { INFURA } from "../config/infura";
import { AxieContract } from "../abi/AxieAbi";
import { IAxieContractService } from "./IAxieContractService";

const httpProvider = new Web3.providers.HttpProvider(INFURA.INFURA_PROJECT_HTTP);
const web3 = new Web3(httpProvider);

export class AxieContractService implements IAxieContractService {

    private contractInstance: any;

    constructor() {
        this.contractInstance = new web3.eth.Contract(AxieContract, AXIE.AXIE_CONTRACT_ADDRESS);
    }

    public async getTotalSupply(): Promise<number> {
        return await this.contractInstance.methods.totalSupply().call();
    }
}
