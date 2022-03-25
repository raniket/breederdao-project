import { loadEnv } from "../commons/loadEnv";

export const INFURA = {
    INFURA_PROJECT_HTTP: `https://mainnet.infura.io/v3/${loadEnv('INFURA_PROJECT_ID')}`
}
