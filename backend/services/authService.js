// backend/services/authService.js
import * as authRepository from '../repositories/authRepository.js';
import { generateToken } from '../utils/jwtUtils.js'; 
import { generateCode } from '../utils/codeGenerator.js'; 
import { sendEmail } from '../utils/emailSender.js';

export const requestLoginCode = async (email) => {
    if (!email) {
        throw new Error('E-mail é obrigatório.');
    }

    const user = await authRepository.findUserByEmail(email);
    if (!user) {
        throw new Error('Usuário não encontrado.');
    }

    const code = generateCode(); // Gera um código de 6 dígitos
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // Código expira em 10 minutos

    await authRepository.saveAuthCode(user.id, code, expiresAt);

    // TODO: Implementar o envio de e-mail real
    await sendEmail(email, 'Seu código de login iGlic', `Seu código de login é: ${code}. Ele expira em 10 minutos.`);

    console.log(`Código ${code} enviado para ${email}`); // Apenas para debug
};

export const verifyLoginCode = async (email, code) => {
    if (!email || !code) {
        throw new Error('E-mail e código são obrigatórios.');
    }

    const user = await authRepository.findUserByEmail(email);
    if (!user) {
        throw new Error('Usuário não encontrado.');
    }

    const authCode = await authRepository.findValidAuthCode(user.id, code);

    if (!authCode || authCode.expires_at < new Date() || authCode.used) {
        throw new Error('Código inválido ou expirado.');
    }

    await authRepository.markAuthCodeAsUsed(authCode.id);

    // TODO: Gerar um token JWT real aqui
    const token = generateToken({ 
        id: user.id, 
        email: user.email 
    });

    return token;
};
