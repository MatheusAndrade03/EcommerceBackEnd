const Usuario = require("../models/Usuario");
const Logger = require("../utils/Logger");

class UsuarioService {
  static async criarUsuario(dados) {
    try {
      const usuario = new Usuario(dados);
      return await usuario.save();
    } catch (err) {
      Logger.logError(`Erro ao criar usuário: ${err.message}`);
      throw new Error("Erro ao salvar usuário");
    }
  }

  static async buscarUsuarios() {
    try {
      return await Usuario.find();
    } catch (err) {
      Logger.logError(`Erro ao buscar usuários: ${err.message}`);
      throw new Error("Erro ao buscar usuários");
    }
  }

  static async deletarUsuario(id) {
    try {
      return await Usuario.findByIdAndDelete(id);
    } catch (err) {
      Logger.logError(`Erro ao deletar usuário: ${err.message}`);
      throw new Error("Erro ao deletar usuário");
    }
  }
}

module.exports = UsuarioService;
