import { DuskClassRepository } from '../../src/repository/DuskClassRepository';
import { EntityMock } from '../../__mock__/entity/entityMocker';

const entityMock = new EntityMock();

describe('Test DuskClassRepository', () => {
    it('should get the dusk', async() => {
        const duskClassRepository = new DuskClassRepository(entityMock);
        const dusk = await duskClassRepository.get('1');
        expect(dusk).toHaveProperty('_id', '1');
    });

    it('should get all dusk', async() => {
        const duskClassRepository = new DuskClassRepository(entityMock);
        const dusk = await duskClassRepository.getAll();
        expect(dusk).toHaveLength(3);
    });

    it('should save the dusk', async() => {
        const duskClassRepository = new DuskClassRepository(entityMock);
        const dusk = await duskClassRepository.save({
            _id: '4',
            name: 'Name 4',
            stage: 'Stage 4',
            class: 'Dusk',
            currentPriceUSD: '40.00'
        });
        expect(dusk).toHaveProperty('_id', '4');
    });

    it('should save all dusk', async() => {
        const duskClassRepository = new DuskClassRepository(entityMock);
        const dusk = await duskClassRepository.saveAll([
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
        expect(dusk).toHaveLength(2);
    });

    it('should remove the dusk', async() => {
        const duskClassRepository = new DuskClassRepository(entityMock);
        const dusk = await duskClassRepository.remove('1');
        expect(dusk).toHaveProperty('_id', '1');
    });
});