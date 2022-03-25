import { IAxieClass } from "../types/IAxieClass";
import { IAxieClassRepository } from "./IAxieClassRepository";

export class AquaticClassRepository implements IAxieClassRepository<IAxieClass> {

    private aquaticClassEntity: any;

    constructor(AquaticClassEntity: any) {
        this.aquaticClassEntity = AquaticClassEntity;
    }

    public async get(id: string): Promise<IAxieClass|null> {
        return await this.aquaticClassEntity.findById(id);
    }

    public async getAll(): Promise<IAxieClass[]> {
        return await this.aquaticClassEntity.find({});
    }

    public async save(plant: IAxieClass): Promise<IAxieClass> {
        return await this.aquaticClassEntity.create(plant);
    }

    public async saveAll(plants: IAxieClass[]): Promise<IAxieClass[]> {
        return await this.aquaticClassEntity.insertMany(plants);
    }

    public async remove(id: string): Promise<IAxieClass|null> {
        return await this.aquaticClassEntity.findByIdAndRemove(id);
    }
}
