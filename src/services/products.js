import {
  deleteProductById,
  insertProduct,
  selectAllProducts,
  selectProductById,
  updateProductById,
} from "../repositories/products.js";

export const findAllProducts = async () => {
  return await selectAllProducts();
};

export const findProductById = async (id) => {
  return await selectProductById(id);
};

export const registerProduct = async (dataProduct) => {
  return await insertProduct(dataProduct);
};

export const editProduct = async (id, data) => {
  const result = await updateProductById(id, data);

  if (result.affectedRows === 0) {
    throw new Error("Produto não encontrado");
  }

  return result;
};

export const removeProduct = async (id) => {
  const result = await deleteProductById(id);

  if (result.affectedRows === 0) {
    throw new Error("Produto não encontrado");
  }

  return result;
};
