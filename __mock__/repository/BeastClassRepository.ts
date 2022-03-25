import { IAxieClass } from '../../src/types';

export class BeastClassRepository {
    
    constructor(entity: any) {}

    public async get(id: string): Promise<IAxieClass> {
        const data =  {
            _id: id,
            name: 'Name 3',
            stage: 'Stage 3',
            class: 'Beast',
            currentPriceUSD: '30.00'
        }
        return Promise.resolve(data);
    }

    public async getAll(): Promise<IAxieClass[]> {
        const data = [
            {
                _id: '1',
                name: 'Name 1',
                stage: 'Stage 1',
                class: 'Beast',
                currentPriceUSD: '10.00'
            },
            {
                _id: '2',
                name: 'Name 2',
                stage: 'Stage 2',
                class: 'Plant',
                currentPriceUSD: '20.00'
            },
            {
                _id: '3',
                name: 'Name 3',
                stage: 'Stage 3',
                class: 'Beast',
                currentPriceUSD: '30.00'
            }
        ]
        return Promise.resolve(data);
    }

    public async save(data: IAxieClass): Promise<IAxieClass> {
        return Promise.resolve(data);
    }

    public async saveAll(data: IAxieClass[]): Promise<IAxieClass[]> {
        return Promise.resolve(data);
    }

    public async remove(id: string): Promise<IAxieClass> {
        const data =  {
            _id: id,
            name: 'Name 3',
            stage: 'Stage 3',
            class: 'Beast',
            currentPriceUSD: '30.00'
        }
        return Promise.resolve(data);
    }
}