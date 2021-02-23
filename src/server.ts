import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello NLW' });
});

app.post('/', (request, response) => {
  return response.json({
    message: 'Os dados foram salvos com sucesso, obrigado!',
  });
});

app.listen(3333, () => console.log('Server is running'));
