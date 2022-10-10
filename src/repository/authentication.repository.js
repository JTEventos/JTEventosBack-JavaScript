const pool = require("../config/connection.database");
const sqlErrorHandler = require("./utils/handle-sql-error");

exports.checkIfExists = async (username, password) => {
    const db = await pool.connect();
    try {
        const query = `SELECT * FROM USUARIOS WHERE USERNAME = $1 AND PASSWORD = $2`;
        const result = await db.query(query, [username, password]);
        return result.rowCount;
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}
