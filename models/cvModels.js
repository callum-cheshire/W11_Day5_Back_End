import { query } from "../data/index.cjs";

export async function getAllCVs() {
    const result = await query("SELECT * FROM cv_database;");
    const allCVs = result.rows;
    return allCVs;
  }

export async function createCV({ first_name, surname, title, email, phone_number, education, experience }) {
    const result = await query(
      `INSERT INTO cv_database (question_author, question_title, room_number, problem_summary, tried_input, code, error_logs)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * `,
      [first_name, surname, title, email, phone_number, education, experience]
    );
    return result.rows;
  }

export async function getCVById(id) {
  const result = await query(
    `SELECT * 
    FROM cv_database
    WHERE id = $1`, [id]);
  const cv = result.rows[0];
  return cv;
}

export async function updateCVById(id, { first_name, surname, title, email, phone_number, education, experience }) {
  const result = await query(
    `UPDATE cv_database
    SET question_author = $1, question_title = $2, room_number = $3, problem_summary = $4, tried_input = $5, code = $6, error_logs = $7
    WHERE id = $8
    RETURNING *`, [first_name, surname, title, email, phone_number, education, experience], id) 
  const updatedCV = result.rows[0];
  return updatedCV;
}

export async function deleteCVById(id) {
  const result = await query(
    `DELETE FROM cv_database 
    WHERE id = $1
    RETURNING *`, [id]) 
  const updatedCV = result.rows[0];
  return updatedCV;
}