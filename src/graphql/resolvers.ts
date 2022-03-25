import { loadData, axieService } from '../service';
import { RepositoryFactory } from '../repository/RepositoryFactory';

export const resolvers = {
    Query: {
        getTotalSupply: async () => {
            return await axieService.getTotalSupply();
        },
        getAquaticClass: async () => {
            return await RepositoryFactory.getAxieClassRepository('AquaticClass').getAll();
        },
        getBeastClass: async () => {
            return await RepositoryFactory.getAxieClassRepository('BeastClass').getAll();
        },
        getBirdClass: async () => {
            return await RepositoryFactory.getAxieClassRepository('BirdClass').getAll();
        },
        getBugClass: async () => {
            return await RepositoryFactory.getAxieClassRepository('BugClass').getAll();
        },
        getDawnClass: async () => {
            return await RepositoryFactory.getAxieClassRepository('DawnClass').getAll();
        },
        getDuskClass: async () => {
            return await RepositoryFactory.getAxieClassRepository('DuskClass').getAll();
        },
        getMechClass: async () => {
            return await RepositoryFactory.getAxieClassRepository('MechClass').getAll();
        },
        getPlantClass: async () => {
            return await RepositoryFactory.getAxieClassRepository('PlantClass').getAll();
        },
        getReptileClass: async () => {
            return await RepositoryFactory.getAxieClassRepository('ReptileClass').getAll();
        }
    },

    Mutation: {
        loadData: async (_: any) => {
            return await loadData.execute();
        }
    }
};
