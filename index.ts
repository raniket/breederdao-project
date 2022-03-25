require('dotenv').config();
import { initDb } from './src/init/db';
import { initApolloServer } from './src/init/apolloServer'
import { APP } from './src/config/app';

async function init() {

    await initDb();
    const server = await initApolloServer();

    server.listen({
        port: APP.PORT
    }).then(({ url }: any) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}

init();
