import express, { Request, Response } from 'express';
import connectionDB from './database/db.js';

const app = express();
const port = process.env.PORT || 4000;

connectionDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



