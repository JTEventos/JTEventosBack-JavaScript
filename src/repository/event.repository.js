const pool = require("../config/connection.database");
const sqlErrorHandler = require("./utils/handle-sql-error");

exports.findAll = async () => {
    const db = await pool.connect();
    const query = `SELECT * FROM EVENT`;
    try {
        return await db.query(query);
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.findOne = async (id) => {
    const db = await pool.connect();
    const query = `SELECT * FROM EVENT WHERE ID = $1`;
    try {
        const result = await db.query(query, [id]);
        return result.rowCount;
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.createEvent = async (eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = `INSERT INTO EVENT (EVENTTYPEID, CUSTOMERID, ESTABLISHMENTID, DESCRIPTION, STARTDATE, FINISHDATE, INVITELIST) ` +
                      `VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        const result = await db.query(query, [eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList]);
        await db.query("COMMIT");
        return result.rows;
    } catch (e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.updateEvent = async (id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = `UPDATE EVENT SET EVENTTYPEID = $1, CUSTOMERID = $2, ESTABLISHMENTID = $3, DESCRIPTION = $4, ` +
                      `STARTDATE = $5, FINISHDATE = $6, INVITELIST = $7 WHERE ID = $8`;
        await(db.query(query, [eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList, id]));
        await db.query("COMMIT");
        return result.rows;
    } catch(e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.deleteEvent = async (id) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = "DELETE FROM EVENT WHERE ID = $1";
        await(bd.query(query, [id]));
        await db.query("COMMIT");
    } catch(e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}