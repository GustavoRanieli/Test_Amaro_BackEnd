import express, { Router, Request, Response } from 'express';
import ControllerUsers from '../controllers/user.controller';

const router: Router = express.Router();

// Rota para cadastro de usuário
router.post('/users/register', async (req: Request, res: Response) => {
  try {
    const result = await ControllerUsers.createUser(req, res);
    res.status(result.statusCode).json(result.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para login de usuário
router.post('/users/login', async (req: Request, res: Response) => {
  try {
    const result = await ControllerUsers.loginUser(req, res);
    res.status(result.statusCode).json(result.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

export default router;
