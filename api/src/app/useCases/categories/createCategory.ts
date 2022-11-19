import { Category } from './../../models/Category';
import { Request, Response } from 'express';

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;
    const category = await Category.create({ icon, name });
    res.status(201).json(category);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

