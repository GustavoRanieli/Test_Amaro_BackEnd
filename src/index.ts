import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import de rotas
import userRouter from './routers/user.router';
import productRouter from './routers/product.router';
import path from 'path';

// Configurar variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req: Request, res: Response) => {
  res.send('Servidor rodando com TypeScript e Yarn!');
});

app.use('/src/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', userRouter);
app.use('/', productRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
