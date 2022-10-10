const pool = require("../config/connection.database");
const sqlErrorHandler = require("./utils/handle-sql-error");

exports.checkIfExists = async (id) => {
    const db = await pool.connect();
    try {
        const query = `SELECT * FROM USUARIOS WHERE ID = $1`;
        const result = await db.query(query, [id]);
        return result.rowCount;
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.findAll = async () => {
    const db = await pool.connect();
    try {
        const query = `SELECT * FROM USUARIOS`;
        return await db.query(query);
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.findById = async (id) => {
    const db = await pool.connect();
    try {
        const query = `SELECT * FROM USUARIOS WHERE ID = $1`;
        return await db.query(query, [id]);
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.createUser = async (username, password) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = "INSERT INTO USERS (NAME, PASSWORD) VALUES ($1, $2)";
        const result = await db.query(query, [username, password]);
        await db.query("COMMIT");
        return result.rows;
    } catch (e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.updateUser = async (id, username, password) => {
    const db = await pool.connect();
    try {
        const query = "UPDATE USERS SET NAME = $1, PASSWORD = $2 WHERE ID = $3";
        await(db.query(query, [username, password, id]));
    } catch(e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}