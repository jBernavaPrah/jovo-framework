import { ExpressJs, Webhook } from '@jovotech/server-express';
import { app } from './app';

/*
|--------------------------------------------------------------------------
| EXPRESS SERVER CONFIGURATION
|--------------------------------------------------------------------------
|
| Creates a new express app instance, default for local development
| Learn more here: https://www.jovo.tech/marketplace/server-express
|
*/

const port = process.env.JOVO_PORT || 3000;

(async () => {
  if (process.env.NODE_ENV === 'test' || process.env.JEST_WORKER_ID) {
    return;
  }

  await app.initialize();

  Webhook.listen(port, () => {
    console.info(`Local server listening on port ${port}.`);
  });

  Webhook.post('/webhook', async (req, res) => {
    await app.handle(new ExpressJs(req, res));
  });
})();
