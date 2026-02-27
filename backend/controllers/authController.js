import * as authService from "../services/authService.js";

export const requestCode = async (req, res) => {
  try {
    const { email } = req.body;
    await authService.requestLoginCode(email);
    return res.status(200).json({ message: "Código de login enviado para o seu e-mail." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const verifyCode = async (req, res) => {
  try {
    const { email, code } = req.body;
    const token = await authService.verifyLoginCode(email, code);
    return res.status(200).json({ message: "Login bem-sucedido!", token });
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

export const guestLogin = async (req, res) => {
  try {
    const { user, token } = await authService.createGuestSession();
    return res.status(201).json({ message: "Entrada temporária criada!", user, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
