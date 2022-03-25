import { loadEnv } from '../commons/loadEnv'

export const DB = {
    HOST: loadEnv('DB_HOST'),
    USER: loadEnv('DB_USER'),
    PASSWORD: loadEnv('DB_PASSWORD'),
    NAME: loadEnv('DB_NAME'),
}