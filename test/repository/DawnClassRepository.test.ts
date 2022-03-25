import { DawnClassRepository } from '../../src/repository/DawnClassRepository';
import { EntityMock } from '../../__mock__/entity/entityMocker';

const entityMock = new EntityMock();

describe('Test DawnClassRepository', () => {
    it('should get the dawn', async() => {
        const dawnClassRepository = new DawnClassRepository(entityMock);
        const dawn = await dawnClassRepository.get('1');
        expect(dawn).toHaveProperty('_id', '1');
    });

    it('should get all dawn', async() => {
        const dawnClassRepository = new DawnClassRepository(entityMock);
        const dawn = await dawnClassRepository.getAll();
        expect(dawn).toHaveLength(3);
    });

    it('should save the dawn', async() => {
        const dawnClassRepository = new DawnClassRepository(entityMock);
        const dawn = await dawnClassRepository.save({
            _id: '4',
            name: 'Name 4',
            stage: 'Stage 4',
            class: 'Dusk',
            currentPriceUSD: '40.00'
        });
        expect(dawn).toHaveProperty('_id', '4');
    });

    it('should save all dawn', async() => {
        const dawnClassRepository = new DawnClassRepository(entityMock);
        const dawn = await dawnClassRepository.saveAll([
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
        expect(dawn).toHaveLength(2);
    });

    it('should remove the dawn', async() => {
        const dawnClassRepository = new DawnClassRepository(entityMock);
        const dawn = await dawnClassRepository.remove('1');
        expect(dawn).toHaveProperty('_id', '1');
    });
});