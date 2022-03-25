import { ReptileClassRepository } from '../../src/repository/ReptileClassRepository';
import { EntityMock } from '../../__mock__/entity/entityMocker';

const entityMock = new EntityMock();

describe('Test ReptileClassRepository', () => {
    it('should get the reptile', async() => {
        const reptileClassRepository = new ReptileClassRepository(entityMock);
        const reptile = await reptileClassRepository.get('1');
        expect(reptile).toHaveProperty('_id', '1');
    });

    it('should get all reptile', async() => {
        const reptileClassRepository = new ReptileClassRepository(entityMock);
        const reptile = await reptileClassRepository.getAll();
        expect(reptile).toHaveLength(3);
    });

    it('should save the reptile', async() => {
        const reptileClassRepository = new ReptileClassRepository(entityMock);
        const reptile = await reptileClassRepository.save({
            _id: '4',
            name: 'Name 4',
            stage: 'Stage 4',
            class: 'Dusk',
            currentPriceUSD: '40.00'
        });
        expect(reptile).toHaveProperty('_id', '4');
    });

    it('should save all reptile', async() => {
        const reptileClassRepository = new ReptileClassRepository(entityMock);
        const reptile = await reptileClassRepository.saveAll([
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
        expect(reptile).toHaveLength(2);
    });

    it('should remove the reptile', async() => {
        const reptileClassRepository = new ReptileClassRepository(entityMock);
        const reptile = await reptileClassRepository.remove('1');
        expect(reptile).toHaveProperty('_id', '1');
    });
});