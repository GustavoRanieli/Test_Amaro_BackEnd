import dotenv from 'dotenv';
import { Knex } from 'knex';

// Configurar variáveis de ambiente
dotenv.config();

const config: Knex.Config = {
  client: 'mysql',
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD, // Substitua pela senha do banco
    database: process.env.DATABASE,
  },
};

export default config;
