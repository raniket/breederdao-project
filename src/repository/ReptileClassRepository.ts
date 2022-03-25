import { IAxieClass } from "../types/IAxieClass";
import { IAxieClassRepository } from "./IAxieClassRepository";

export class ReptileClassRepository implements IAxieClassRepository<IAxieClass> {

    private reptileClassEntity: any;

    constructor(ReptileClassEntity: any) {
        this.reptileClassEntity = ReptileClassEntity;
    }

    public async get(id: string): Promise<IAxieClass|null> {
        return await this.reptileClassEntity.findById(id);
    }

    public async getAll(): Promise<IAxieClass[]> {
        return await this.reptileClassEntity.find({});
    }

    public async save(plant: IAxieClass): Promise<IAxieClass> {
        return await this.reptileClassEntity.create(plant);
    }

    public async saveAll(plants: IAxieClass[]): Promise<IAxieClass[]> {
        return await this.reptileClassEntity.insertMany(plants);
    }

    public async remove(id: string): Promise<IAxieClass|null> {
        return await this.reptileClassEntity.findByIdAndRemove(id);
    }
}
