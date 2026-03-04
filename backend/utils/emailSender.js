export const sendEmail = async (to, subject, text) => {
  try {
    console.log(`
            --- SIMULANDO ENVIO DE E-MAIL ---
            Para: ${to}
            Assunto: ${subject}
            Corpo: ${text}
            ----------------------------------
        `);
  } catch (error) {
    console.error("Erro na simulação de envio de e-mail:", error);
  }
};
