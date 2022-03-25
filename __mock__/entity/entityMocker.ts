import { IAxieClass } from "../../src/types"

export class EntityMock {
    findById(id: string): Promise<IAxieClass> {
        const data = {
            _id: id,
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Beast',
            currentPriceUSD: '10.00'
        }
        return Promise.resolve(data);
    }

    find(): Promise<IAxieClass[]> {
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
                class: 'Dusk',
                currentPriceUSD: '30.00'
            }
        ]
        return Promise.resolve(data);
    }

    create(data: IAxieClass): Promise<IAxieClass> {
        return Promise.resolve(data);
    }

    insertMany(data: IAxieClass[]): Promise<IAxieClass[]> {
        return Promise.resolve(data);
    }

    findByIdAndRemove(id: string): Promise<IAxieClass> {
        const data = {
            _id: id,
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Beast',
            currentPriceUSD: '10.00'
        }
        return Promise.resolve(data);
    }
}