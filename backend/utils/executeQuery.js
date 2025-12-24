import pool from "../config/database.js";

/**
 * @param {string} text - A query SQL
 * @param {array} params - paramentros da query (opcional)
 */

export async function executeQuery(text, params) {
   try {
      const res = await pool.query(text, params);
      return res.rows;
   } catch (error) {
      console.error("Error na execução da query:", {text, error});
      throw error;
   }
}

