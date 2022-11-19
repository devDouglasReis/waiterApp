import { Category } from './../../models/Category';
import { Request, Response } from 'express';

export async function listCategories(req: Request, res: Response) {
  const categories = await Category.find();
  res.json(categories);
}
