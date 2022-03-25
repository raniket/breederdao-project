import { loadEnv } from "../commons/loadEnv";

export const AXIE = {
    AXIE_GRAPHQL_BASE_URL: loadEnv('AXIE_GRAPHQL_BASE_URL'),
    AXIE_CONTRACT_ADDRESS: loadEnv('AXIE_CONTRACT_ADDRESS')
}
