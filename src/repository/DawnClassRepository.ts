import { IAxieClass } from "../types/IAxieClass";
import { IAxieClassRepository } from "./IAxieClassRepository";

export class DawnClassRepository implements IAxieClassRepository<IAxieClass> {

    private dawnClassEntity: any; 

    constructor(DawnClassEntity: any) {
        this.dawnClassEntity = DawnClassEntity;
    }

    public async get(id: string): Promise<IAxieClass|null> {
        return await this.dawnClassEntity.findById(id);
    }

    public async getAll(): Promise<IAxieClass[]> {
        return await this.dawnClassEntity.find({});
    }

    public async save(plant: IAxieClass): Promise<IAxieClass> {
        return await this.dawnClassEntity.create(plant);
    }

    public async saveAll(plants: IAxieClass[]): Promise<IAxieClass[]> {
        return await this.dawnClassEntity.insertMany(plants);
    }

    public async remove(id: string): Promise<IAxieClass|null> {
        return await this.dawnClassEntity.findByIdAndRemove(id);
    }
}
