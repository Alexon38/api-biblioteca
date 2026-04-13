// index.js - API REST Simples (Monolito)
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());                    // Permite requisições de qualquer origem
app.use(express.json());            // Para ler JSON no body (boa prática)

// Rota de boas-vindas (única rota da API)
app.get('/', (req, res) => {
  res.status(200).json({
    sucesso: true,
    mensagem: '👋 Bem-vindo à API REST simples construída com Node.js, Express e CORS!',
    versao: '1.0.0',
    documentacao: 'Apenas um GET em / para testar'
  });
});

// Rota de health check (opcional, mas útil)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📡 Teste no navegador: http://localhost:${PORT}`);
  console.log(`   Ou acesse: http://localhost:${PORT}/health`);
});