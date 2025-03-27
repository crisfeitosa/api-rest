import express from 'express';

const PORT = 3333;

const app = express();

app.get("/products/:id", (request, response) => {
  const { id } = request.params;

  response.send(`Product ${id}`);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));