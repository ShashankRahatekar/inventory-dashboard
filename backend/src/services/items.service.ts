// src/services/items.service.ts
import { pool } from '../db';
import { Item } from '../../../definitions/items.definition';

export const getAllItems = async (): Promise<Item[]> => {
  const result = await pool.query('SELECT * FROM items');
  return result.rows;
};

export const addItem = async (item: Item): Promise<Item> => {
  const result = await pool.query(
    'INSERT INTO items (name, quantity, price) VALUES ($1, $2, $3) RETURNING *',
    [item.name, item.quantity, item.price]
  );
  return result.rows[0];
};