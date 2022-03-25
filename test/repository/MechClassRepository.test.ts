import { MechClassRepository } from '../../src/repository/MechClassRepository';
import { EntityMock } from '../../__mock__/entity/entityMocker';

const entityMock = new EntityMock();

describe('Test MechClassRepository', () => {
    it('should get the mech', async() => {
        const mechClassRepository = new MechClassRepository(entityMock);
        const mech = await mechClassRepository.get('1');
        expect(mech).toHaveProperty('_id', '1');
    });

    it('should get all mech', async() => {
        const mechClassRepository = new MechClassRepository(entityMock);
        const mech = await mechClassRepository.getAll();
        expect(mech).toHaveLength(3);
    });

    it('should save the mech', async() => {
        const mechClassRepository = new MechClassRepository(entityMock);
        const mech = await mechClassRepository.save({
            _id: '4',
            name: 'Name 4',
            stage: 'Stage 4',
            class: 'Dusk',
            currentPriceUSD: '40.00'
        });
        expect(mech).toHaveProperty('_id', '4');
    });

    it('should save all mech', async() => {
        const mechClassRepository = new MechClassRepository(entityMock);
        const mech = await mechClassRepository.saveAll([
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
        expect(mech).toHaveLength(2);
    });

    it('should remove the mech', async() => {
        const mechClassRepository = new MechClassRepository(entityMock);
        const mech = await mechClassRepository.remove('1');
        expect(mech).toHaveProperty('_id', '1');
    });
});