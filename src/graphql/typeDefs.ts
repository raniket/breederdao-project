const { gql } = require('apollo-server');

export const typeDefs = gql`
    type AxieClass {
        id: ID!
        name: String
        stage: String
        class: String
        currentPriceUSD: String
    }

    type Query {
        getTotalSupply: Int
        getAquaticClass: [AxieClass]
        getBeastClass: [AxieClass]
        getBirdClass: [AxieClass]
        getBugClass: [AxieClass]
        getDawnClass: [AxieClass]
        getDuskClass: [AxieClass]
        getMechClass: [AxieClass]
        getPlantClass: [AxieClass]
        getReptileClass: [AxieClass]
    }

    type Mutation {
        loadData: String
    }
`;
