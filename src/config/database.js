const mongoose = require("mongoose");
const logger = require("../utils/Logger");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB conectado com sucesso");
  } catch (err) {
    console.error("❌ Erro ao conectar no MongoDB:", err.message);
  }
}

module.exports = connectDB;
