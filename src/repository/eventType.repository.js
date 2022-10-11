const mongo = require("../config/connection.database");
const sqlErrorHandler = require("./utils/handle-sql-error");
const schemas = require("../config/schemas.database");

exports.checkIfExists = async (id) => {
    const db = await pool.connect();
    try {
        const query = `SELECT * FROM EVENTTYPE WHERE ID = $1`;
        const result = await db.query(query, [id]);
        return result.rowCount;
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.findAll = async () => {
    //const db = await mongo.connectDb();
    schemas.schemasJtEventos();

    // try {
    //     const query = `SELECT * FROM EVENTTYPE`;
    //     return await db.query(query);
    // } catch(e) {
    //     sqlErrorHandler(e);
    // } finally {
        //mongo.disconnectDb();
    // }
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
        const query = `UPDATE EVENTTYPE SET DESCRIPTION = $1 WHERE ID = $2`;
        await(db.query(query, [description, id]));
    } catch(e) {
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.deleteEventType = async (id) => {
    const db = await pool.connect();
    try {
        const query = "DELETE FROM EVENTTYPE WHERE ID = $1";
        await(db.query(query, [id]));
    } catch(e) {
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}