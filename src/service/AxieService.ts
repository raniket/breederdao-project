import { IAxieContractService } from "../commons/IAxieContractService";
import { IAxieService } from "./IAxieService";

export class AxieService implements IAxieService {

    private axieContractService: IAxieContractService;

    constructor(axieContractService: IAxieContractService) { 
        this.axieContractService = axieContractService;
    }

    public async getTotalSupply(): Promise<number> {
        const totalSupply = await this.axieContractService.getTotalSupply();
        return totalSupply;
    }
    
}