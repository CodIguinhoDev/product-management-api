import { editProduct, findAllProducts, findProductById, registerProduct, removeProduct } from "../services/products.js";

export const getAllProducts = async (_, res) => {
  try {
    const result = await findAllProducts();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ message: "Id inválido" });
    }

    const result = await findProductById(id);

    if (!result) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { created_by, description, quantity, price } = req.body;

    if (!created_by || !description || quantity == null || price == null) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    if (isNaN(Number(quantity)) || isNaN(Number(price))) {
      return res.status(400).json({ message: "quantity e price devem ser números" });
    }

    const result = await registerProduct(req.body);

    return res.status(201).json({
      message: "Produto criado com sucesso!",
      id: result.insertId,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ message: "Id inválido" });
    }

    const result = await editProduct(id, data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ message: "Id inválido" });
    }

    await removeProduct(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
