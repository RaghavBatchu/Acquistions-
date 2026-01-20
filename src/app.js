//setting up express server and middleware

import express from 'express';
import logger from './config/logger.js';
const app = express();

app.get('/', (req, res) => {
    logger.info('hello route accessed');
  res.status(200).send('Hello, from Acquisitions!');
});

export default app;
