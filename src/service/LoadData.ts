import { ILoadData } from './ILoadData';
import { IAxieClass, IAxieBriefs } from '../types';
import { IAxieWebService } from '../commons/IAxieWebService';
import { IAxieClassRepository } from '../repository/IAxieClassRepository';

export class LoadData implements ILoadData {
    private RepositoryFactory: any;
    private axieWebService: IAxieWebService;

    constructor(RepositoryFactory: any, axieWebService: IAxieWebService) {
        this.RepositoryFactory = RepositoryFactory;
        this.axieWebService = axieWebService;
    }

    public async execute(): Promise<void> {
        try {
            const axieBriefs: IAxieBriefs = await this.axieWebService.getAxieBriefs();
            const axieBriefsKeys: string[] = Object.keys(axieBriefs);
            for (let axisClassKey of axieBriefsKeys) {
                const axieClassRepository: IAxieClassRepository<IAxieClass> = this.RepositoryFactory.getAxieClassRepository(axisClassKey);
                // @ts-ignore
                const axieClasses: IAxieClass[] = axieBriefs[axisClassKey];
                await axieClassRepository.saveAll(axieClasses);
            }
        } catch (error: any) {
            if (error.code == '11000') throw new Error('Data is already loaded');
            throw new Error('Error loading data to DB');
        }
    }
}
