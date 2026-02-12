// backend/repositories/authRepository.js
import pool from "../config/database.js";

export const findUserByEmail = async (email) => {
  const result = await pool.query(
    `SELECT id, email 
      FROM users 
      WHERE email = $1
      `,
    [email],
  );
  return result.rows[0];
};

export const saveAuthCode = async (userId, code, expiresAt) => {
  await pool.query(
    `INSERT INTO auth_codes (user_id, code, expires_at) 
         VALUES ($1, $2, $3)
        `,
    [userId, code, expiresAt],
  );
};

export const findValidAuthCode = async (userId, code) => {
  const result = await pool.query(
    `SELECT id, expires_at, used 
    FROM auth_codes 
    WHERE user_id = $1 AND code = $2 
    ORDER BY create_at DESC LIMIT 1
    `,
    [userId, code],
  );
  return result.rows[0];
};

export const markAuthCodeAsUsed = async (authCodeId) => {
  await pool.query(
    `
   UPDATE auth_codes 
   SET used = TRUE 
   WHERE id = $1
   `,
    [authCodeId],
  );
};
