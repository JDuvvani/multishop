import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorHandler } from '@multishop/api-middleware';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to Auth Service!' });
});

app.use(errorHandler);

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
  console.log(`Auth service running at http://localhost:${port}`);
});
server.on('error', (err) => console.error('Server Error', err));
