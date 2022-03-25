import { IAxieClass } from '../../src/types';

export class DawnClassRepository {

    constructor(entity: any) {}

    public async get(id: string): Promise<IAxieClass> {
        return {
            _id: id,
            name: 'Dawn',
            stage: 'Stage 1',
            class: 'Dawn',
            currentPriceUSD: '0.00'
        };
    }

    public async getAll(): Promise<IAxieClass[]> {
        return [
            {
                _id: '1',
                name: 'Dawn',
                stage: 'Stage 1',
                class: 'Dawn',
                currentPriceUSD: '0.00'
            },
            {
                _id: '2',
                name: 'Dawn',
                stage: 'Stage2',
                class: 'Dawn',
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
            name: 'Dawn',
            stage: 'Stage 1',
            class: 'Dawn',
            currentPriceUSD: '0.00'
        };
    }
}
