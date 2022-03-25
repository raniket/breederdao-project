import { IAxieClass } from '../types';
import { IAxieClassRepository } from './IAxieClassRepository';
import {AquaticClassRepository} from './AquaticClassRepository';
import { BeastClassRepository } from './BeastClassRepository';
import { BirdClassRepository } from './BirdClassRepository';
import { BugClassRepository } from './BugClassRepository';
import { DawnClassRepository } from './DawnClassRepository';
import { DuskClassRepository } from './DuskClassRepository';
import { MechClassRepository } from './MechClassRepository';
import { PlantClassRepository } from './PlantClassRepository';
import { ReptileClassRepository } from './ReptileClassRepository';
import {
    AquaticClassEntity,
    BeastClassEntity,
    BirdClassEntity,
    BugClassEntity,
    DawnClassEntity,
    DuskClassEntity,
    MechClassEntity,
    PlantClassEntity,
    ReptileClassEntity,
} from '../entity';


export class RepositoryFactory  {
    public static getAxieClassRepository(axieClassName: string): IAxieClassRepository<IAxieClass> {
        if (axieClassName === 'AquaticClass') {
            return new AquaticClassRepository(AquaticClassEntity);
        } else if (axieClassName === 'BeastClass') {
            return new BeastClassRepository(BeastClassEntity);
        } else if (axieClassName === 'BirdClass') {
            return new BirdClassRepository(BirdClassEntity);
        } else if (axieClassName === 'BugClass') {
            return new BugClassRepository(BugClassEntity);
        } else if (axieClassName === 'DawnClass') {
            return new DawnClassRepository(DawnClassEntity);
        } else if (axieClassName === 'DuskClass') {
            return new DuskClassRepository(DuskClassEntity);
        } else if (axieClassName === 'MechClass') {
            return new MechClassRepository(MechClassEntity);
        } else if (axieClassName === 'PlantClass') {
            return new PlantClassRepository(PlantClassEntity);
        } else if (axieClassName === 'ReptileClass') {
            return new ReptileClassRepository(ReptileClassEntity);
        } else {
            throw new Error('Unknown axie class name');
        }
    }
}
