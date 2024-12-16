import { Request, Response } from 'express';
import db from '../database/db'; // Conexão Knex
import logger from '../config/winston.config';

class ProductController {
  // Criar Produto
  async createProduct(req: Request, res: Response) {
    try {
      // Capturar dados do formulário
      const { name, description, notice, price, category } = req.body;
  
      // Verificar se o arquivo foi enviado
      if (!req.file) {
        return { statusCode: 400, body: { message: 'A imagem é obrigatória.' }}
      }
  
      const url_img = req.file.path; // Caminho da imagem salva
  
      // Validação simples
      if (!name || !description || !price || !category || notice === undefined) {
        logger.warn('Dados incompletos!');
        return { statusCode: 400, body: { message: 'Dados incompletos, verificar campos!' }}
      }
  
      // Inserir no banco
      const [id] = await db('product').insert({
        name,
        description,
        notice,
        price,
        category,
        url_img, // Salvar o caminho da imagem no banco
      });
  
      logger.info('Produto cadastrado com sucesso!');
      return { statusCode: 201, body: { message: 'Produto criado com sucesso!', productId: id }}
    } catch (error) {
      logger.error(error);
      return { statusCode: 500, body: { message: 'Erro ao criar produto!' }}
    }
  }

  // Listar Produtos com Filtros
  async listProducts(req: Request, res: Response) {
    try {
      const { category, notice, name } = req.query;

      // Base da consulta
      let query = await db('product').select('*');

      // Aplicar filtro por categoria
      if (category != 'null') {
          query = await db('product').where('category', parseInt(category as string));
      }

      if (name != 'null') {
        query = await db('product').where('name', 'LIKE', `%${name}%`);
    }

      // Aplicar filtro por nota (maior ou igual)
      if (notice != 'null') {
          query = await db('product').where('notice', parseInt(notice as string));
      }
      // Executar a consulta final
      const products = await query;

      logger.info('Tabela de produtos consultada com sucesso!');
      return {
          statusCode: 200,
          body: {
              message: 'Tabela de produtos consultada com sucesso!',
              products,
          },
      };
    } catch (error) {
      logger.error(error);
      return { statusCode: 500, body: { message: 'Erro ao consultar todos produto!' }}
    }
  }

  // Buscar Produto por ID
  async selectedProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const product = await db('product').where({ id }).first();

      if (!product) {
        logger.warn('Produto não encontrado!');
        return { statusCode: 404, body: { message: 'Produto não encontrado!' }}
      }

      logger.info('Produto consultado com sucesso!');
      return { statusCode: 200, body: { messagem: 'Produto encontrado', product }};
    } catch (error) {
      logger.error(error);
      return { statusCode: 500, body: { messagem: 'Erro ao pesquisar produto especifico!' }};
    }
  }

  // Deletar Produto
  async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedRows = await db('product').where({ id }).del();

      if (deletedRows === 0) {
        logger.warn('Produto não encontrado para delete');
        return { statusCode: 404, body: { message: 'Produto não encontrado para deletar!' }};
      }

      logger.info('Produto deletado com sucesso!');
      return { statusCode: 200, body: { message: 'Produto deletado com sucesso!' }};
    } catch (error) {
      logger.error(error);
      return { statusCode: 500, body: { message: 'Erro ao deletar produto!' }};
    }
  }
}

export default new ProductController();
