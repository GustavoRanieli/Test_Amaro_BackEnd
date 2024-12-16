import knex from 'knex';
import knexConfig from '../config/knex.config';

const db = knex(knexConfig);
export default db;
