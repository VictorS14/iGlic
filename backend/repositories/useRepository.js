import pool from "../config/database.js";

// funcao para inserir os dados na tabela do usser no DB
export async function saveGlicoseTest(value, user_id, measure_at = new Date()) {
  try {
    const result = await pool.query(`
      INSERT INTO glicose_values(value, user_id, measure_at)
      VALUES($1, $2, $3)
      RETURNING *;
      `, [value, user_id, measure_at]);

    return result.rows[0];
  } catch (error) {
    console.error("Error ao salvar o valor da glicose:", {
      message: error.detail,
      value,
      timestamp: new Date().toISOString()
    });

    throw error;
   }
}


// funcao apra editar um valor
export async function updateGlicoseValue(value, glicoseId, userId, measure_at) {
  try {
    let query = `UPDATE glicose_values AS g SET value = $1`;
    const params = [value];
    if (measure_at) {
      query += `, measure_at = $${params.length + 1}`;
      params.push(measure_at);
    }
    query += ` WHERE g.id = $${params.length + 1} AND user_id = $${params.length + 2} RETURNING *;`;
    params.push(glicoseId, userId);

    const result = await pool.query(query, params);

    if(!result.rows[0]){
      console.warn(`Aviso: Registro com ID ${glicoseId} não encontrado.`)
      return null
    }

    return result.rows[0];

  } catch(error) {
    console.error("Error ao atualizar a glicose:", error.message);

    throw error;
  }
}


// funcao para pegar a media do dia
export async function getGlicoseAverageDay(userId) {
  try {  
    const result = await pool.query(`
        SELECT 
            FLOOR(AVG(g.value)) AS media_do_dia,
            COUNT(g.value) AS quantidade_medicoes,
            ARRAY_AGG(g.value) AS medicoes
        FROM 
            glicose_values AS g
        INNER JOIN 
            users AS u ON g.user_id = u.id
        WHERE 
            u.id = $1 AND g.create_at >= CURRENT_DATE 
            AND g.create_at < CURRENT_DATE + INTERVAL '1 day';
      `, [userId]);

      return result.rows[0];
  } catch (error) {
    console.error("Error ao conectar", error);
  }
}


export async function getGlicoseAverageByPeriod(userId, days) {
  try {  
    const result = await pool.query(`
        SELECT 
            FLOOR(AVG(g.value)) AS media,
            COUNT(g.value) AS quantidade_medicoes,
            ARRAY_AGG(g.value) AS medicoes
        FROM 
            glicose_values AS g
        WHERE 
            g.user_id = $1   
            AND g.create_at >= CURRENT_DATE - ($2 * INTERVAL '1 days');
      `, [userId, days]);

      return result.rows[0];
  } catch (error) {
    console.error("Error ao conectar", error);
  }
}


// função para deletar um valor
export async function deleteById(glicoseId, userId) {
  try {
    const result = await pool.query(`
      DELETE FROM glicose_values AS g
      WHERE g.id = $1 AND user_id = $2
      RETURNING *;
    `, [glicoseId, userId]);

    if(result.rows[0] == undefined) {
      console.log(`Aviso: valor da glicose com ID ${glicoseId} ou user com ID ${userId} não foram encontrados.`)
      return null
    }

    return result.rows[0];

  } catch(error) {
    console.log("Error ao deletar:", error.message);

    throw error
  }
}

export async function saveUserTargetRange(userId, veryHigh, targetRangeMin, targetRangeMax) {
  try {
    const result = await pool.query(`
      INSERT INTO user_target_range(user_id, very_high, target_range_min, target_range_max)
      VALUES($1, $2, $3, $4)
      ON CONFLICT (user_id)
      DO UPDATE SET
        very_high = EXCLUDED.very_high,
        target_range_min = EXCLUDED.target_range_min,
        target_range_max = EXCLUDED.target_range_max
      RETURNING *;
      `, [userId, veryHigh, targetRangeMin, targetRangeMax]);
    return result.rows[0];
  } catch (error) {
    console.log("Error ao salvar o range de alvo:", error.message);
    throw error;
  };
};

export async function getUserTargetRange(userId) {
  try {
    const result = await pool.query(`
      SELECT 
        very_high, 
        target_range_min, 
        target_range_max
      FROM user_target_range 
      WHERE user_id = $1
      `, [userId]);
      return result.rows[0];
  } catch (error) {
    console.log("Error ao buscar o range de alvo:", error.message);
    throw error;
  };
};

export async function getRecentReadings(userId) {
  try{
    const result = await pool.query(`
      SELECT 
        g.id,
        g.value,
        TO_CHAR(g.measure_at, 'DD-MM-YYYY HH24:MI') AS measure_at,
        TO_CHAR(g.measure_at, 'HH24:MI') AS timestamp
      FROM glicose_values AS g
      WHERE g.user_id = $1 AND g.create_at >= CURRENT_DATE
        AND g.create_at < CURRENT_DATE + INTERVAL '1 day';
      `, [userId]);
        return result.rows;
  }catch(error) {
    console.error("Error ao buscar os valores recentes:", error.message);
    throw error;
  }
}

export async function getAllData(userId) {
  try {
    const result = await pool.query(`
      SELECT
        g.id,
        g.value,
        g.measure_at,
        TO_CHAR(g.measure_at, 'HH24:MI') AS timestamp
      FROM glicose_values as g
      WHERE user_id = $1 
      ORDER BY measure_at DESC;
      `,[userId]);
      return result.rows;
  } catch (error) {
    console.error("Error ao buscar os dados:", error.message);
    throw error;
  }
} 