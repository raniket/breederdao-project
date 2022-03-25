import { IAxieClass } from "../types/IAxieClass";
import { IAxieClassRepository } from "./IAxieClassRepository";

export class BeastClassRepository implements IAxieClassRepository<IAxieClass> {

    private beastClassEntity: any;

    constructor(BeastClassEntity: any) {
        this.beastClassEntity = BeastClassEntity;
    }

    public async get(id: string): Promise<IAxieClass|null> {
        return await this.beastClassEntity.findById(id);
    }

    public async getAll(): Promise<IAxieClass[]> {
        return await this.beastClassEntity.find({});
    }

    public async save(plant: IAxieClass): Promise<IAxieClass> {
        return await this.beastClassEntity.create(plant);
    }

    public async saveAll(plants: IAxieClass[]): Promise<IAxieClass[]> {
        return await this.beastClassEntity.insertMany(plants);
    }

    public async remove(id: string): Promise<IAxieClass|null> {
        return await this.beastClassEntity.findByIdAndRemove(id);
    }
}
