import { db_connection } from "../database/connection.js";

export const selectAllProducts = async () => {
  const [products] = await db_connection.query("SELECT * FROM products ORDER BY id ASC");
  return products;
};

export const selectProductById = async (id) => {
  const [products] = await db_connection.query("SELECT * FROM products WHERE id = ?", [id]);
  return products[0];
};

export const insertProduct = async (dataProduct) => {
  const { created_by, description, quantity, price } = dataProduct;

  const [result] = await db_connection.query(
    `INSERT INTO products (created_by, description, quantity, price)
    VALUES (?, ?, ?, ?)`,
    [created_by, description, quantity, price],
  );

  return result;
};

export const updateProductById = async (id, data) => {
  const { created_by, description, quantity, price } = data;
  const [result] = await db_connection.query(
    `UPDATE products SET
      created_by = ?,
      description = ?,
      quantity = ?,
      price = ?
    WHERE id = ?
    `,
    [created_by, description, quantity, price, id],
  );

  return result;
};

export const deleteProductById = async (id) => {
  const [result] = await db_connection.query("DELETE FROM products WHERE id = ?", [id]);
  return result;
};
