import { BirdClassRepository } from '../../src/repository/BirdClassRepository';
import { EntityMock } from '../../__mock__/entity/entityMocker';

const entityMock = new EntityMock();

describe('Test BirdClassRepository', () => {
    it('should get the bird', async() => {
        const birdClassRepository = new BirdClassRepository(entityMock);
        const bird = await birdClassRepository.get('1');
        expect(bird).toHaveProperty('_id', '1');
    });

    it('should get all bird', async() => {
        const birdClassRepository = new BirdClassRepository(entityMock);
        const bird = await birdClassRepository.getAll();
        expect(bird).toHaveLength(3);
    });

    it('should save the bird', async() => {
        const birdClassRepository = new BirdClassRepository(entityMock);
        const bird = await birdClassRepository.save({
            _id: '4',
            name: 'Name 4',
            stage: 'Stage 4',
            class: 'Dusk',
            currentPriceUSD: '40.00'
        });
        expect(bird).toHaveProperty('_id', '4');
    });

    it('should save all bird', async() => {
        const birdClassRepository = new BirdClassRepository(entityMock);
        const bird = await birdClassRepository.saveAll([
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
        expect(bird).toHaveLength(2);
    });

    it('should remove the bird', async() => {
        const birdClassRepository = new BirdClassRepository(entityMock);
        const bird = await birdClassRepository.remove('1');
        expect(bird).toHaveProperty('_id', '1');
    });
});