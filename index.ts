require('dotenv').config();
import { initDb } from './src/init/db';
import { initApolloServer } from './src/init/apolloServer'

async function init() {

    await initDb();
    const server = await initApolloServer();

    server.listen({
        port: 8080
    }).then(({ url }: any) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}

init();
