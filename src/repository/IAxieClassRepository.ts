export interface IAxieClassRepository<IAxieClass> {
    get(id: string): Promise<IAxieClass|null>;
    getAll(): Promise<IAxieClass[]|null>;
    save(plant: IAxieClass): Promise<IAxieClass>;
    saveAll(plants: IAxieClass[]): Promise<IAxieClass[]>;
    remove(id: string): Promise<IAxieClass|null>;
}
