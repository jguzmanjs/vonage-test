/** Import main dependencies */
import fastify, { FastifyInstance } from 'fastify';
import fastifyCors from '@fastify/cors';

import { serializeError } from 'serialize-error';




/**
* @description Create Fastify App.
*/
const app: FastifyInstance = fastify({
  logger: process.env.EMERGYA_SERVER_LOGGER === 'true',
});

(async (): Promise<void> => {
  try {


    /** Register all routes */
    app.register(fastifyCors, {
      origin: '*',
    });

    // You must listen on all IPV4 addresses in Cloud Run
    const address = '0.0.0.0';
    // TODO: Add address const into listener.
    await app.listen(8080, '0.0.0.0');
    // Waits for the instance to load all the plugins.
    await app.ready();
    console.log(`server listening on ${address}`);
    process.on('uncaughtException', (err) => {
      console.error(`[ERR!] Uncaught error - ${JSON.stringify(serializeError(err))}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
