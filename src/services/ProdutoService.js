const Produto = require("../models/Produto");
const Logger = require("../utils/Logger");

class ProdutoService {
  static async criarProduto(dados) {
    try {
      const produto = new Produto(dados);
      return await produto.save();
    } catch (err) {
      Logger.logError(`Erro ao criar produto: ${err.message}`);
      throw new Error("Erro ao salvar produto");
    }
  }

  static async buscarProdutos() {
    try {
      return await Produto.find();
    } catch (err) {
      Logger.logError(`Erro ao buscar produtos: ${err.message}`);
      throw new Error("Erro ao buscar produtos");
    }
  }

  static async deletarProduto(id) {
    try {
      return await Produto.findByIdAndDelete(id);
    } catch (err) {
      Logger.logError(`Erro ao deletar produto: ${err.message}`);
      throw new Error("Erro ao deletar produto");
    }
  }
}

module.exports = ProdutoService;
