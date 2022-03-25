import { IAxieClass } from "../types/IAxieClass";
import { IAxieClassRepository } from "./IAxieClassRepository";

export class BugClassRepository implements IAxieClassRepository<IAxieClass> {

    private bugClassEntity: any; 

    constructor(BugClassEntity: any) {
        this.bugClassEntity = BugClassEntity;
    }

    public async get(id: string): Promise<IAxieClass|null> {
        return await this.bugClassEntity.findById(id);
    }

    public async getAll(): Promise<IAxieClass[]> {
        return await this.bugClassEntity.find({});
    }

    public async save(plant: IAxieClass): Promise<IAxieClass> {
        return await this.bugClassEntity.create(plant);
    }

    public async saveAll(plants: IAxieClass[]): Promise<IAxieClass[]> {
        return await this.bugClassEntity.insertMany(plants);
    }

    public async remove(id: string): Promise<IAxieClass|null> {
        return await this.bugClassEntity.findByIdAndRemove(id);
    }
}
