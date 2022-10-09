const pool = require("../config/connection.database");
const sqlErrorHandler = require("./utils/handle-sql-error");

exports.findAll = async () => {
    const db = await pool.connect();
    const query = `SELECT * FROM EVENTTYPE`;
    try {
        return await db.query(query);
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.createEventType = async (description) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = `INSERT INTO EVENTTYPE (DESCRIPTION) VALUES ($1)`;
        const result = await db.query(query, [description]);
        await db.query("COMMIT");
        return result.rows;
    } catch (e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.updateEventType = async (id, description) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = `UPDATE EVENTTYPE SET DESCRIPTION = $1 WHERE ID = $2`;
        await(db.query(query, [description, id]));
        await db.query("COMMIT");
        return result.rows;
    } catch(e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.deleteEventType = async (id) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = "DELETE FROM EVENTTYPE WHERE ID = $1";
        await(bd.query(query, [id]));
        await db.query("COMMIT");
    } catch(e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}