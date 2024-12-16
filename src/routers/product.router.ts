import logger from '../config/winston.config';
import upload from '../config/multer.config';
import express, { Router, Request, Response } from 'express';
import ProductController from '../controllers/product.controller';


const router: Router = express.Router();

// Listar Produtos
router.get('/products', async (req: Request, res: Response ) => {
    try {
        const result = await ProductController.listProducts( req, res );
        res.status(result.statusCode).json(result.body);
    }
    catch(error){
        logger.error('Erro no controller ao listar produtos!');
        res.status(500).json({ message: 'Erro no controller, ao listar produtos! '});
    }
});

// Selecionar Produto Específico
router.get('/products/:id', async ( req: Request, res: Response ) => {
    try{
        const result = await ProductController.selectedProduct( req, res );
        res.status(result.statusCode).json(result.body);
    }
    catch( error ){
        logger.error('Erro no controller ao selecionar produto ');
        res.status(500).json({ message: 'Erro no controller, ao selecionar produto '})
    }
});

// Criar Produto
router.post('/products', upload.single('image'), async ( req: Request, res: Response ) => {
    try{
        const result = await ProductController.createProduct( req, res );
        res.status(result.statusCode).json(result.body);
    }
    catch( error ){
        logger.error('Erro no controller ao criar produto!');
        res.status(500).json({ message: 'Erro no controller, ao criar produto '});
    }
});

// Deletar Produto
router.delete('/products/:id', async ( req: Request, res: Response ) => {
    try {
        const result = await ProductController.deleteProduct( req, res );
        res.status(result.statusCode).json(result.body);
    } catch (error) {
        logger.error('Erro no controller ao deletar produto');
        res.status(500).json({ message: 'Erro no controller, ao deletar produto '});
    }
});

export default router;
