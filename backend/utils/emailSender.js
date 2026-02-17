import nodemailer from 'nodemailer';
import 'dotenv/config';

const EMAIL_FROM = process.env.EMAIL_FROM;
const SENDPULSE_API_ID = process.env.SENDPULSE_API_ID;
const SENDPULSE_API_SECRET = process.env.SENDPULSE_API_SECRET;

if(!EMAIL_FROM || !SENDPULSE_API_ID || !SENDPULSE_API_SECRET) {
    console.error('Erro: Variaáveis de ambiente SendPulse (EMAIL_FROM, SENDPULSE_API_ID, SENDPULSE_API_SECRET) não estão definidas.')
};

const transporter = nodemailer.createTransport({
    host: 'smtp.sendpulse.com',
    port: 465,
    secure: true,
    auth: {
        user: SENDPULSE_API_ID,
        pass: SENDPULSE_API_SECRET,
    },
});


export const sendEmail = async (to, subject, text) => {
    // console.log(`
    //     --- SIMULANDO ENVIO DE E-MAIL ---
    //     Para: ${to}
    //     Assunto: ${subject}
    //     Corpo: ${text}
    //     ----------------------------------
    // `);
    
    try {
        await transporter.sendMail({
            from: EMAIL_FROM,
            to,
            subject,
            text,
        });

        console.log(`E-mail enviado para ${to} com sucesso.`);
    } catch (error) {
        console.error(`Erro ao enviar e-mail para ${to}:`, error);
        throw new Error('Falha ao enviar e-mail.');
    };
};
