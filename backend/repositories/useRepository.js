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


// funcao para pegar a media do dia
async function getGlicoseAvarageDay(user_id) {
  try {
    console.log("Conectado ao Database!");
  
    const res = await pool.query(`
        SELECT 
            FLOOR(AVG(g.value)) AS media_do_dia
        FROM 
            glicose_values AS g
        INNER JOIN 
            users AS u ON g.user_id = u.id
        WHERE 
            u.id = $1 AND g.create_at >= CURRENT_DATE 
            AND g.create_at < CURRENT_DATE + INTERVAL '1 day';
      `, [user_id]); 

      return res.rows;
  } catch (error) {
    console.error("Error ao conectar", error);
  }
}

