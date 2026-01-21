import express from 'express';
import 'dotenv/config';
import glicoseRoutes from './routes/glicoseRoutes.js'

const app = express();
app.use(express.json());

app.use(glicoseRoutes);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server rodando na porta ${PORT}`);
});