import { ApolloServer } from 'apollo-server';
import {typeDefs, resolvers} from '../graphql';

export const initApolloServer = async () => {
    return new ApolloServer({ typeDefs, resolvers });
}
