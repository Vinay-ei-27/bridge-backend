import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

// Enable CORS for all routes
app.use(cors());

import tokensRoute from './routes/tokens.routes.js';
import quotesRoute from './routes/quotes.routes.js';
import paramsRoute from './routes/params.routes.js';

app.use(express.json());
app.use('/tokens', tokensRoute);
app.use('/quotes', quotesRoute);
app.use('/params', paramsRoute);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

export default app;
