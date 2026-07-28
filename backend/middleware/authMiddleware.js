import { verifyToken } from "../utils/jwtUtils.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "token não fornecido." });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).json({ error: "Formato de token inválido." });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: "Token mal formatado." });
  }

  try {
    const decoded = verifyToken(token);

    req.user = {
      id: decoded.id,
      name: decoded.name,
    };

    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
};
