# EcommerceBackEnd

🛒 E-Commerce API (Node.js + MongoDB)
📌 Descrição do Projeto

Este projeto foi desenvolvido como parte da disciplina Programação Web Back-End.
O objetivo é implementar uma  E-Commerce, permitindo o gerenciamento de Produtos, Usuários e Pedidos.

As funcionalidades principais incluem:

📦 Produtos → criação, listagem e exclusão

👤 Usuários → criação, listagem e exclusão

🛍️ Pedidos → criação, listagem e exclusão

🚀 Tecnologias Utilizadas

Node.js
 → ambiente de execução JavaScript no servidor

Express
 → framework para criação de rotas e middlewares

MongoDB
 → banco de dados NoSQL

Mongoose
 → ODM para modelar os dados no MongoDB

Winston
 → biblioteca de logs para salvar erros e operações do sistema

📂 Estrutura de Pastas 
ecommerce/
│-- src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── Produto.js
│   │   ├── Usuario.js
│   │   └── Pedido.js
│   ├── services/
│   │   ├── ProdutoService.js
│   │   ├── UsuarioService.js
│   │   └── PedidoService.js
│   ├── utils/
│   │   ├── Logger.js
│   └── app.js
│
│-- package.json

⚙️ Instalação e Configuração
1️⃣ Clonar o repositório
git clone https://github.com/MatheusAndrade03/EcommerceBackEnd


2️⃣ Instalar dependências
npm install

3️⃣ Subir o servidor
node src/app.js


O servidor será iniciado em:

http://localhost:3000

📌 Endpoints Disponíveis
📦 Produtos

POST /produtos → criar produto

GET /produtos → listar todos os produtos

DELETE /produtos/:id → deletar produto

👤 Usuários

POST /usuarios → criar usuário

GET /usuarios → listar todos os usuários

DELETE /usuarios/:id → deletar usuário

🛍️ Pedidos

POST /pedidos → criar pedido

GET /pedidos → listar todos os pedidos

DELETE /pedidos/:id → deletar pedido

📝 Exemplo de Requisição (Produto)
Criar Produto
POST http://localhost:3000/produtos
{
  "nome": "Mouse Gamer",
  "preco": 120.50,
  "estoque": 15
}

Resposta
{
  "_id": "68cb611578e4262779f8337b",
  "nome": "Mouse Gamer",
  "preco": 120.50,
  "estoque": 15
}

📝 Exemplo de Requisição (Pedido)
POST http://localhost:3000/pedidos
{
  "usuarioId": "68cb6a43c49e9beb62ce40a5", //IdUsuario
  "produtos": [{"produtoId":"68cb611578e4262779f8337b","quantidade":1}], //Idproduto
  "valorTotal": 99.90
}
📝 Exemplo de Requisição (Usuario)
POST http://localhost:3000/usuarios
{ "nome": "Matheus", "email": "matheus@email.com", "senha": "123456" }

🛡️ Tratamento de Erros e Logs

Todos os erros são tratados e registrados com Winston.

Os logs são salvos em logs/app.log e também exibidos no console.

Exemplos de logs:

info: Produto criado: 68cb611578e4262779f8337b

warn: Tentativa de deletar produto inexistente: 123

error: Erro ao buscar pedidos: ...

📚 Critérios Atendidos 

✔ Implementação de casos de uso da temática E-Commerce
✔ Validação de campos obrigatórios via Mongoose
✔ Tratamento de exceções com mensagens claras
✔ Armazenamento de logs em arquivo