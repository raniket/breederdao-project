import {AxieContractService} from '../../__mock__/commons/AxieContractService';
import {} from '../../src/service/AxieService';

describe('Test AxisService', () => {
    it('should getTotalSupply', async () => {
        const axieContractService = new AxieContractService();
        let totalSupply = await axieContractService.getTotalSupply();
        expect(totalSupply).toBe(100);
    });
});
