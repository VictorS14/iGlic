import pool from "../config/database.js";

// funcao para inserir os dados na tabela do usser no DB
async function saveGlicoseTest(value, user_id) {
  try {
    console.log("Conectado ao Database!");

    const res = await pool.query(`
      INSERT INTO glicose_values(value, user_id)
      VALUES($1, $2)
      RETURNING value;
      `, [value, user_id]);

    return res.rows[0];
  } catch (err) {
    console.error("Error ao conectar:", err);
   }
}


