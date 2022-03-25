import { IAxieClass } from '../../src/types';

export class BugClassRepository {

    constructor(entity: any) {}

    public async get(id: string): Promise<IAxieClass> {
        return {
            _id: id,
            name: 'Bug',
            stage: 'Stage 1',
            class: 'Bug',
            currentPriceUSD: '0.00'
        };
    }

    public async getAll(): Promise<IAxieClass[]> {
        return [
            {
                _id: '1',
                name: 'Bug',
                stage: 'Stage 1',
                class: 'Bug',
                currentPriceUSD: '0.00'
            },
            {
                _id: '2',
                name: 'Bug',
                stage: 'Stage2',
                class: 'Bug',
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
            name: 'Bug',
            stage: 'Stage 1',
            class: 'Bug',
            currentPriceUSD: '0.00'
        };
    }
}