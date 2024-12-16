import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../database/db'; 
import jwtConfig from '../config/jwt.config';
import logger from '../config/winston.config';
import { Request, Response } from 'express';

class ControllerUsers {
  // Cadastro de Usuário
  async createUser(req: Request, res: Response) {
    try {
      const { name, email, password, fk_function } = req.body;

      // Validação simples
      if (!name || !email || !password || !fk_function) {
        logger.warn('Erro ao cadastrar, faltando dados');
        return { statusCode: 400, body: { message: 'Nome, email, password necessário' } };
      }

      // Verificar se o email já está registrado
      const existingUser = await db('users').where({ email }).first();
      if (existingUser) {
        logger.warn('Usuário já cadastrado');
        return { statusCode: 400, body: { message: 'Email já usado!' } };
      }

      // Criptografar a senha
      const hashedPassword = await bcrypt.hash(password, 10);

      // Inserir usuário no banco
      const [id] = await db('users').insert({
        name,
        email,
        password: hashedPassword,
        fk_function
      });

      logger.info('Usuário cadastrado com sucesso!');
      return { statusCode: 201, body: { message: 'Usuário cadastrado com sucesso!', userId: id } };
    } catch (error) {
      logger.error(error);
      return { statusCode: 500, body: { message: 'Something went wrong!' } };
    }
  }

  // Login do Usuário
  async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // Validação simples
      if (!email || !password) {
        logger.warn('Erro ao logar, está faltando dados!');
        return { statusCode: 400, body: { message: 'Email ou senha necessários' } };
      }

      // Verificar se o usuário existe
      const user = await db('users').where({ email }).first();
      if (!user) {
        logger.warn('Não foi possível logar, email não encontrado');
        return { statusCode: 404, body: { message: 'Usuário não encontrado, verificar email!' } };
      }

      // Comparar a senha fornecida com a armazenada
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        logger.warn('Erro ao comparar hash, verificar senha');
        return { statusCode: 401, body: { message: 'Email ou senha inválido' } };
      }

      // Gerar token JWT
      const token = jwt.sign({ id: user.id }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
      });

      logger.info('Usuário logando com sucesso!');
      return { statusCode: 200, body: { message: 'Login successful!', token, fk_function: user.fk_function } };
    } catch (error) {
      logger.error(error);
      return { statusCode: 500, body: { message: 'Something went wrong!' } };
    }
  }

}

export default new ControllerUsers();
