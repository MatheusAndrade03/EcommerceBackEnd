const express = require("express");
const connectDB = require("./config/database");
const ProdutoService = require("./services/ProdutoService");
const UsuarioService = require("./services/UsuarioService");
const PedidoService = require("./services/PedidoService");
const logger = require("./utils/Logger"); 

const app = express();
app.use(express.json());


connectDB();

app.use((req, res, next) => {
  logger.info(`➡️ ${req.method} ${req.url}`);
  next();
});

app.post("/produtos", async (req, res) => {
  try {
    const produto = await ProdutoService.criarProduto(req.body);
    logger.info(`Produto criado: ${produto._id}`);
    res.status(201).json(produto);
  } catch (err) {
    logger.error(`Erro ao criar produto: ${err.message}`);
    res.status(500).json({ erro: err.message });
  }
});

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await ProdutoService.buscarProdutos();
    logger.info(`Produtos encontrados: ${produtos.length}`);
    res.json(produtos);
  } catch (err) {
    logger.error(`Erro ao buscar produtos: ${err.message}`);
    res.status(500).json({ erro: err.message });
  }
});

app.delete("/produtos/:id", async (req, res) => {
  try {
    const produto = await ProdutoService.deletarProduto(req.params.id);

    if (!produto) {
      logger.warn(`Tentativa de deletar produto inexistente: ${req.params.id}`);
      return res.status(404).json({ erro: "Produto não encontrado" });
    }

    logger.info(`Produto deletado: ${produto._id}`);
    res.json(produto);
  } catch (err) {
    logger.error(`Erro ao deletar produto: ${err.message}`);
    res.status(500).json({ erro: err.message });
  }
});


app.post("/usuarios", async (req, res) => {
  try {
    const usuario = await UsuarioService.criarUsuario(req.body);
    logger.info(`Usuário criado: ${usuario._id}`);
    res.status(201).json(usuario);
  } catch (err) {
    logger.error(`Erro ao criar usuário: ${err.message}`);
    res.status(500).json({ erro: err.message });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await UsuarioService.buscarUsuarios();
    logger.info(`Usuários encontrados: ${usuarios.length}`);
    res.json(usuarios);
  } catch (err) {
    logger.error(`Erro ao buscar usuários: ${err.message}`);
    res.status(500).json({ erro: err.message });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
    const usuario = await UsuarioService.deletarUsuario(req.params.id);

    if (!usuario) {
      logger.warn(`Tentativa de deletar usuário inexistente: ${req.params.id}`);
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    logger.info(`Usuário deletado: ${usuario._id}`);
    res.json(usuario);
  } catch (err) {
    logger.error(`Erro ao deletar usuário: ${err.message}`);
    res.status(500).json({ erro: err.message });
  }
});


app.post("/pedidos", async (req, res) => {
  try {
    const pedido = await PedidoService.criarPedido(req.body);
    logger.info(`Pedido criado: ${pedido._id}`);
    res.status(201).json(pedido);
  } catch (err) {
    logger.error(`Erro ao criar pedido: ${err.message}`);
    res.status(500).json({ erro: err.message });
  }
});

app.get("/pedidos", async (req, res) => {
  try {
    const pedidos = await PedidoService.buscarPedidos();
    logger.info(`Pedidos encontrados: ${pedidos.length}`);
    res.json(pedidos);
  } catch (err) {
    logger.error(`Erro ao buscar pedidos: ${err.message}`);
    res.status(500).json({ erro: err.message });
  }
});

app.delete("/pedidos/:id", async (req, res) => {
  try {
    const pedido = await PedidoService.deletarPedido(req.params.id);

    if (!pedido) {
      logger.warn(`Tentativa de deletar pedido inexistente: ${req.params.id}`);
      return res.status(404).json({ erro: "Pedido não encontrado" });
    }

    logger.info(`Pedido deletado: ${pedido._id}`);
    res.json(pedido);
  } catch (err) {
    logger.error(`Erro ao deletar pedido: ${err.message}`);
    res.status(500).json({ erro: err.message });
  }
});


const PORT = 3000;
app.listen(PORT, () => logger.info(`🚀 Servidor rodando na porta ${PORT}`));
