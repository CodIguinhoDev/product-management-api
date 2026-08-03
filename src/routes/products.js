import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/products.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 6
 *         created_at:
 *           type: string
 *           format: date-time
 *         created_by:
 *           type: string
 *           example: Igor
 *         description:
 *           type: string
 *           example: Playstation 5
 *         quantity:
 *           type: integer
 *           example: 2
 *         price:
 *           type: number
 *           format: float
 *           example: 3800.00
 *     ProductInput:
 *       type: object
 *       required:
 *         - created_by
 *         - description
 *         - quantity
 *         - price
 *       properties:
 *         created_by:
 *           type: string
 *         description:
 *           type: string
 *         quantity:
 *           type: integer
 *         price:
 *           type: number
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/products", getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Id inválido
 *       404:
 *         description: Produto não encontrado
 */
router.get("/products/:id", getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/products", createProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       200:
 *         description: Produto atualizado
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Produto não encontrado
 */
router.put("/products/:id", updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Remove um produto pelo ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Produto removido com sucesso
 *       400:
 *         description: Id inválido
 *       404:
 *         description: Produto não encontrado
 */
router.delete("/products/:id", deleteProduct);

export default router;
