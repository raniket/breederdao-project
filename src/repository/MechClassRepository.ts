import { IAxieClass } from "../types/IAxieClass";
import { IAxieClassRepository } from "./IAxieClassRepository";

export class MechClassRepository implements IAxieClassRepository<IAxieClass> {

    private mechClassRepository: any;

    constructor(MechClassRepository: any) {
        this.mechClassRepository = MechClassRepository;
    }

    public async get(id: string): Promise<IAxieClass|null> {
        return await this.mechClassRepository.findById(id);
    }

    public async getAll(): Promise<IAxieClass[]> {
        return await this.mechClassRepository.find({});
    }

    public async save(plant: IAxieClass): Promise<IAxieClass> {
        return await this.mechClassRepository.create(plant);
    }

    public async saveAll(plants: IAxieClass[]): Promise<IAxieClass[]> {
        return await this.mechClassRepository.insertMany(plants);
    }

    public async remove(id: string): Promise<IAxieClass|null> {
        return await this.mechClassRepository.findByIdAndRemove(id);
    }
}
