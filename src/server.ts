import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;
const aaaa = 'help desk';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`🚀 API listening on port 👉 ${port}, process ID: ${process.pid}`);
});
