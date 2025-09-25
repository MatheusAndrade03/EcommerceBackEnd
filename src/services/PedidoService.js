const Pedido = require("../models/Pedido");
const Logger = require("../utils/Logger");

class PedidoService {
  static async criarPedido(dados) {
    try {
      const pedido = new Pedido(dados);
      return await pedido.save();
    } catch (err) {
      Logger.logError(`Erro ao criar pedido: ${err.message}`);
      throw new Error("Erro ao salvar pedido");
    }
  }

  static async buscarPedidos() {
    try {
      return await Pedido.find().populate("usuarioId").populate("produtos.produtoId");
    } catch (err) {
      Logger.logError(`Erro ao buscar pedidos: ${err.message}`);
      throw new Error("Erro ao buscar pedidos");
    }
  }

  static async deletarPedido(id) {
    try {
      return await Pedido.findByIdAndDelete(id);
    } catch (err) {
      Logger.logError(`Erro ao deletar pedido: ${err.message}`);
      throw new Error("Erro ao deletar pedido");
    }
  }
}

module.exports = PedidoService;
