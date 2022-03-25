import { BugClassRepository } from '../../src/repository/BugClassRepository';
import { EntityMock } from '../../__mock__/entity/entityMocker';

const entityMock = new EntityMock();

describe('Test BugClassRepository', () => {
    it('should get the bug', async() => {
        const bugClassRepository = new BugClassRepository(entityMock);
        const bug = await bugClassRepository.get('1');
        expect(bug).toHaveProperty('_id', '1');
    });

    it('should get all bug', async() => {
        const bugClassRepository = new BugClassRepository(entityMock);
        const bug = await bugClassRepository.getAll();
        expect(bug).toHaveLength(3);
    });

    it('should save the bug', async() => {
        const bugClassRepository = new BugClassRepository(entityMock);
        const bug = await bugClassRepository.save({
            _id: '4',
            name: 'Name 4',
            stage: 'Stage 4',
            class: 'Dusk',
            currentPriceUSD: '40.00'
        });
        expect(bug).toHaveProperty('_id', '4');
    });

    it('should save all bug', async() => {
        const bugClassRepository = new BugClassRepository(entityMock);
        const bug = await bugClassRepository.saveAll([
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
        expect(bug).toHaveLength(2);
    });

    it('should remove the bug', async() => {
        const bugClassRepository = new BugClassRepository(entityMock);
        const bug = await bugClassRepository.remove('1');
        expect(bug).toHaveProperty('_id', '1');
    });
});