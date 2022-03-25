import { IAxieClass } from "../types/IAxieClass";
import { IAxieClassRepository } from "./IAxieClassRepository";

export class PlantClassRepository implements IAxieClassRepository<IAxieClass> {

    private plantClassRepository: any;

    constructor(PlantClassRepository: any) {
        this.plantClassRepository = PlantClassRepository;
    }

    public async get(id: string): Promise<IAxieClass|null> {
        return await this.plantClassRepository.findById(id);
    }

    public async getAll(): Promise<IAxieClass[]> {
        return await this.plantClassRepository.find({});
    }

    public async save(plant: IAxieClass): Promise<IAxieClass> {
        return await this.plantClassRepository.create(plant);
    }

    public async saveAll(plants: IAxieClass[]): Promise<IAxieClass[]> {
        return await this.plantClassRepository.insertMany(plants);
    }

    public async remove(id: string): Promise<IAxieClass|null> {
        return await this.plantClassRepository.findByIdAndRemove(id);
    }
}
