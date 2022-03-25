import { IAxieClass } from '../../src/types';

export class ReptileClassRepository {

    constructor(entity: any) {}

    public async get(id: string): Promise<IAxieClass> {
        return {
            _id: id,
            name: 'Reptile',
            stage: 'Stage 1',
            class: 'Reptile',
            currentPriceUSD: '0.00'
        };
    }

    public async getAll(): Promise<IAxieClass[]> {
        return [
            {
                _id: '1',
                name: 'Reptile',
                stage: 'Stage 1',
                class: 'Reptile',
                currentPriceUSD: '0.00'
            },
            {
                _id: '2',
                name: 'Reptile',
                stage: 'Stage2',
                class: 'Reptile',
                currentPriceUSD: '0.00'
            }
        ];
    }

    public async save(data: IAxieClass): Promise<IAxieClass> {
        return data;
    }

    public async saveAll(data: IAxieClass[]): Promise<IAxieClass[]> {
        return data;
    }

    public async remove(id: string): Promise<IAxieClass> {
        return {
            _id: id,
            name: 'Reptile',
            stage: 'Stage 1',
            class: 'Reptile',
            currentPriceUSD: '0.00'
        };
    }
}