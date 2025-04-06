import { Request, Response } from 'express';
import { getAllItems, addItem } from '../services/items.service';

export const getItems = async (_req: Request, res: Response) => {
  try {
    const items = await getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const item = await addItem(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create item' });
  }
};