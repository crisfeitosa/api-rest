import express from 'express';

const PORT = 3333;

const app = express();

app.get("/products", (request, response) => {
  const { page, limit } = request.query;

  response.send(`Página ${page} de ${limit}`);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));