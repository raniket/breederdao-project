import { loadEnv } from '../commons/loadEnv'

export const DB = {
    CONNECTION_STRING: loadEnv('DB_CONNECTION_STRING'),
}