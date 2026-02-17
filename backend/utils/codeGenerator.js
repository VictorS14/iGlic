// backend/utils/codeGenerator.js
export const generateCode = () => {
    // Gera um código numérico de 6 dígitos
    return Math.floor(100000 + Math.random() * 900000).toString();
};
