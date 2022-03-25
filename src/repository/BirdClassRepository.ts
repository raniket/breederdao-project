import { IAxieClass } from "../types/IAxieClass";
import { IAxieClassRepository } from "./IAxieClassRepository";

export class BirdClassRepository implements IAxieClassRepository<IAxieClass> {

    private birdClassEntity: any;

    constructor(BirdClassEntity: any) {
        this.birdClassEntity = BirdClassEntity;
    }

    public async get(id: string): Promise<IAxieClass|null> {
        return await this.birdClassEntity.findById(id);
    }

    public async getAll(): Promise<IAxieClass[]> {
        return await this.birdClassEntity.find({});
    }

    public async save(plant: IAxieClass): Promise<IAxieClass> {
        return await this.birdClassEntity.create(plant);
    }

    public async saveAll(plants: IAxieClass[]): Promise<IAxieClass[]> {
        return await this.birdClassEntity.insertMany(plants);
    }

    public async remove(id: string): Promise<IAxieClass|null> {
        return await this.birdClassEntity.findByIdAndRemove(id);
    }
}
