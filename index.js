const express = require("express");
const app = express();

// Rota 1 - Página inicial
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Bem-vindo ao site!</h1>
        <p>Essa é a página inicial.</p>
      </body>
    </html>
  `);
});

// Rota 2 - Sobre
app.get("/sobre", (req, res) => {
  res.send(`
    <html>
      <head><title>Sobre</title></head>
      <body>
        <h1>Sobre nós</h1>
        <p>Esta aplicação foi criada como exemplo de request-response.</p>
      </body>
    </html>
  `);
});

// Rota 3 - Contato
app.get("/contato", (req, res) => {
  res.send(`
    <html>
      <head><title>Contato</title></head>
      <body>
        <h1>Contato</h1>
        <p>Email: contato@exemplo.com</p>
      </body>
    </html>
  `);
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});