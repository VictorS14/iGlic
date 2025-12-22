import {Client} from "pg";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../.env') });

const client = new Client({
   host: process.env.DB_HOST, 
   port: process.env.DB_PORT, 
   user: process.env.DB_USER, 
   password: process.env.DB_PASSWORD, 
   database: process.env.DB_NAME 
});

export default client;