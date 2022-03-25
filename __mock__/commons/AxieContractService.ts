import { IAxieContractService } from "../../src/commons/IAxieContractService";

export class AxieContractService implements IAxieContractService {


    constructor() {
    }

    public async getTotalSupply(): Promise<number> {
        return Promise.resolve(100);
    }
}
