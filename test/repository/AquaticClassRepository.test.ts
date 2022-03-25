import {AquaticClassRepository} from '../../src/repository/AquaticClassRepository';
import { EntityMock } from '../../__mock__/entity/entityMocker';

const entityMock = new EntityMock();

describe('Test AquaticClassRepository', () => {
    it('should get the aquatic', async() => {
        const aquaticClassRepository = new AquaticClassRepository(entityMock);
        const aquatic = await aquaticClassRepository.get('1');
        expect(aquatic).toHaveProperty('_id', '1');
    });

    it('should get all aquatic', async() => {
        const aquaticClassRepository = new AquaticClassRepository(entityMock);
        const aquatic = await aquaticClassRepository.getAll();
        expect(aquatic).toHaveLength(3);
    });

    it('should save the aquatic', async() => {
        const aquaticClassRepository = new AquaticClassRepository(entityMock);
        const aquatic = await aquaticClassRepository.save({
            _id: '4',
            name: 'Name 4',
            stage: 'Stage 4',
            class: 'Dusk',
            currentPriceUSD: '40.00'
        });
        expect(aquatic).toHaveProperty('_id', '4');
    });

    it('should save all aquatic', async() => {
        const aquaticClassRepository = new AquaticClassRepository(entityMock);
        const aquatic = await aquaticClassRepository.saveAll([
            {
                _id: '5',
                name: 'Name 5',
                stage: 'Stage 5',
                class: 'Beast',
                currentPriceUSD: '50.00'
            },
            {
                _id: '6',
                name: 'Name 6',
                stage: 'Stage 6',
                class: 'Plant',
                currentPriceUSD: '60.00'
            }
        ]);
        expect(aquatic).toHaveLength(2);
    });

    it('should remove the aquatic', async() => {
        const aquaticClassRepository = new AquaticClassRepository(entityMock);
        const aquatic = await aquaticClassRepository.remove('1');
        expect(aquatic).toHaveProperty('_id', '1');
    });
});