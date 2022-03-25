import { PlantClassRepository } from '../../src/repository/PlantClassRepository';
import { EntityMock } from '../../__mock__/entity/entityMocker';

const entityMock = new EntityMock();

describe('Test PlantClassRepository', () => {
    it('should get the plant', async() => {
        const plantClassRepository = new PlantClassRepository(entityMock);
        const plant = await plantClassRepository.get('1');
        expect(plant).toHaveProperty('_id', '1');
    });

    it('should get all plant', async() => {
        const plantClassRepository = new PlantClassRepository(entityMock);
        const plant = await plantClassRepository.getAll();
        expect(plant).toHaveLength(3);
    });

    it('should save the plant', async() => {
        const plantClassRepository = new PlantClassRepository(entityMock);
        const plant = await plantClassRepository.save({
            _id: '4',
            name: 'Name 4',
            stage: 'Stage 4',
            class: 'Dusk',
            currentPriceUSD: '40.00'
        });
        expect(plant).toHaveProperty('_id', '4');
    });

    it('should save all plant', async() => {
        const plantClassRepository = new PlantClassRepository(entityMock);
        const plant = await plantClassRepository.saveAll([
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
        expect(plant).toHaveLength(2);
    });

    it('should remove the plant', async() => {
        const plantClassRepository = new PlantClassRepository(entityMock);
        const plant = await plantClassRepository.remove('1');
        expect(plant).toHaveProperty('_id', '1');
    });
});