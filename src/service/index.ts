import { RepositoryFactory } from '../repository/RepositoryFactory';
import { LoadData } from './LoadData';
import { AxieWebService } from '../commons/AxieWebService'
import { AxieService } from './AxieService';
import { AxieContractService } from '../commons/AxieContractService';

const axieWebService = new AxieWebService();
const loadData = new LoadData(RepositoryFactory, axieWebService);

const axieContractService = new AxieContractService();
const axieService = new AxieService(axieContractService);

export {
    loadData,
    axieService
}
