import { BeastClassRepository } from '../../src/repository/BeastClassRepository';
import { EntityMock } from '../../__mock__/entity/entityMocker';

const entityMock = new EntityMock();

describe('Test BeastClassRepository', () => {
    it('should get the beast', async() => {
        const beastClassRepository = new BeastClassRepository(entityMock);
        const beast = await beastClassRepository.get('1');
        expect(beast).toHaveProperty('_id', '1');
    });

    it('should get all beast', async() => {
        const beastClassRepository = new BeastClassRepository(entityMock);
        const beast = await beastClassRepository.getAll();
        expect(beast).toHaveLength(3);
    });

    it('should save the beast', async() => {
        const beastClassRepository = new BeastClassRepository(entityMock);
        const beast = await beastClassRepository.save({
            _id: '4',
            name: 'Name 4',
            stage: 'Stage 4',
            class: 'Dusk',
            currentPriceUSD: '40.00'
        });
        expect(beast).toHaveProperty('_id', '4');
    });

    it('should save all beast', async() => {
        const beastClassRepository = new BeastClassRepository(entityMock);
        const beast = await beastClassRepository.saveAll([
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
        expect(beast).toHaveLength(2);
    });

    it('should remove the beast', async() => {
        const beastClassRepository = new BeastClassRepository(entityMock);
        const beast = await beastClassRepository.remove('1');
        expect(beast).toHaveProperty('_id', '1');
    });
});