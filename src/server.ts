import express, { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

import { routes } from './routes';
import { AppError } from './utils/AppError';

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

/**
 * 400 (Bad Request): Erro do cliente
 * 500 (Internal Server Error): Erro interno do servidor
 */

app.use((error: Error | AppError | ZodError, request: Request, response: Response, next: NextFunction): void => {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({ message: error.message });
    return;
  }

  if (error instanceof ZodError) {
    response.status(400).json({
      message: "Validation error!",
      issues: error.format(),
    });

    return;
  }

  response.status(500).json({ message: "Internal Server Error" });
  return;
});


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));