import { LoadData } from "../../src/service/LoadData";
import {RepositoryFactory} from "../../__mock__/repository/RepositoryFactory";
import {AxieWebService} from "../../__mock__/commons/AxieWebService";

const axieWebService = new AxieWebService();

describe('Test LoadData', () => {
    it('should getTotalSupply', async () => {
        const loadData = new LoadData(RepositoryFactory, axieWebService);
        let data;
        try {
            data = await loadData.execute();
            expect(data).toBe('undefined');
        } catch (error) {
            expect(error).toBeUndefined();
        }
    });
});
