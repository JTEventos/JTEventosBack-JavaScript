const pool = require("../config/connection.database");
const sqlErrorHandler = require("./utils/handle-sql-error");

exports.findAll = async () => {
    const db = await pool.connect();
    const query = `SELECT * FROM ESTABLISHMENT`;
    try {
        return await db.query(query);
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.createEstablishment = async (name, cep, street, streetNumber, streetComplement, neighborhood, city, state) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = `INSERT INTO ESTABLISHMENT (NAME, CEP, STREET, STREETNUMBER, STREETCOMPLEMENT, NEIGHBORHOOD, CITY, STATE) ` +
                      `VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
        const result = await db.query(query, [name, cep, street, streetNumber, streetComplement, neighborhood, city, state]);
        await db.query("COMMIT");
        return result.rows;
    } catch (e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.updateEstablishment = async (id, name, cep, street, streetNumber, streetComplement, neighborhood, city, state) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = `UPDATE ESTABLISHMENT ` +
                      `SET NAME = $1, CEP = $2, STREET = $3, STREETNUMBER = $4, STREETCOMPLEMENT = $5, ` +
                      `NEIGHBORHOOD = $6, CITY = $7, STATE = $8 ` +
                      `WHERE ID = $9`;
        await(db.query(query, [name, cep, street, streetNumber, streetComplement, neighborhood, city, state, id]));
        await db.query("COMMIT");
        return result.rows;
    } catch(e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.deleteEstablishment = async (id) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = "DELETE FROM ESTABLISHMENT WHERE ID = $1";
        await(bd.query(query, [id]));
        await db.query("COMMIT");
    } catch(e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}