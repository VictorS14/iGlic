import cors from "cors"
import express from 'express';
import 'dotenv/config';
import glicoseRoutes from './routes/glicoseRoutes.js'
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(glicoseRoutes);
app.use(authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server rodando na porta ${PORT}`);
});