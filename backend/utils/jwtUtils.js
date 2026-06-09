import jwt from "jsonwebtoken";
import "dotenv/config"; // Para carregar as variáveis de ambiente

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("Erro: JWT_SECRET não está definido nas variáveis de ambiente.");
  process.exit(1); // Encerra a aplicação se a chave secreta não estiver definida
}

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" }); // Token expira em 1 hora
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error("Token inválido ou expirado.");
  }
};
