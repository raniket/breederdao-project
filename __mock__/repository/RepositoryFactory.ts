import { IAxieClass } from '../../src/types';
import { AquaticClassRepository } from './AquaticClassRepository';
import { BeastClassRepository } from './BeastClassRepository';
import { BirdClassRepository } from './BirdClassRepository';
import { BugClassRepository } from './BugClassRepository';
import { DawnClassRepository } from './DawnClassRepository';
import { DuskClassRepository } from './DuskClassRepository';
import { MechClassRepository } from './MechClassRepository';
import { PlantClassRepository } from './PlantClassRepository';
import { ReptileClassRepository } from './ReptileClassRepository';
import { EntityMock } from '../entity/entityMocker';
import { IAxieClassRepository } from '../../src/repository/IAxieClassRepository';

const entityMock = new EntityMock()


export class RepositoryFactory {
    public static getAxieClassRepository(axieClassName: string): IAxieClassRepository<IAxieClass> {
        if (axieClassName === 'AquaticClass') {
            return new AquaticClassRepository(entityMock);
        } else if (axieClassName === 'BeastClass') {
            return new BeastClassRepository(entityMock);
        } else if (axieClassName === 'BirdClass') {
            return new BirdClassRepository(entityMock);
        } else if (axieClassName === 'BugClass') {
            return new BugClassRepository(entityMock);
        } else if (axieClassName === 'DawnClass') {
            return new DawnClassRepository(entityMock);
        } else if (axieClassName === 'DuskClass') {
            return new DuskClassRepository(entityMock);
        } else if (axieClassName === 'MechClass') {
            return new MechClassRepository(entityMock);
        } else if (axieClassName === 'PlantClass') {
            return new PlantClassRepository(entityMock);
        } else if (axieClassName === 'ReptileClass') {
            return new ReptileClassRepository(entityMock);
        } else {
            throw new Error('Unknown axie class name');
        }
    }
}
