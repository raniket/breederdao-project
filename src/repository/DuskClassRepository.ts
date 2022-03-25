import { IAxieClass } from "../types/IAxieClass";
import { IAxieClassRepository } from "./IAxieClassRepository";

export class DuskClassRepository implements IAxieClassRepository<IAxieClass> {

    private duskClassRepository: any;

    constructor(DuskClassEntity: any) {
        this.duskClassRepository = DuskClassEntity;
    }

    public async get(id: string): Promise<IAxieClass|null> {
        return await this.duskClassRepository.findById(id);
    }

    public async getAll(): Promise<IAxieClass[]> {
        return await this.duskClassRepository.find({});
    }

    public async save(plant: IAxieClass): Promise<IAxieClass> {
        return await this.duskClassRepository.create(plant);
    }

    public async saveAll(plants: IAxieClass[]): Promise<IAxieClass[]> {
        return await this.duskClassRepository.insertMany(plants);
    }

    public async remove(id: string): Promise<IAxieClass|null> {
        return await this.duskClassRepository.findByIdAndRemove(id);
    }
}
