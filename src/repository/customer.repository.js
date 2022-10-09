const pool = require("../config/connection.database");
const sqlErrorHandler = require("./utils/handle-sql-error");

exports.findAll = async () => {
    const db = await pool.connect();
    const query = `SELECT * FROM CUSTOMERS`;
    try {
        return await db.query(query);
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.findById = async (id) => {
    const db = await pool.connect();
    const query = `SELECT * FROM CUSTOMERS WHERE ID = $1`;
    try {
        return await db.query(query, [id]);
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.findByName = async (name) => {
    const db = await pool.connect();
    const query = `SELECT * FROM CUSTOMERS WHERE NAME LIKE "%$1%"`;
    try {
        return await db.query(query, [name]);
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.findByCpf = async (cpf) => {
    const db = await pool.connect();
    const query = `SELECT * FROM CUSTOMERS WHERE CPF =  "$1%"`;
    try {
        return await db.query(query, [cpf]);
    } catch(e) {
        sqlErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.createCustomer = async (name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = `INSERT INTO CUSTOMERS (NAME, CPF, CEP, STREET, STREETNUMBER, STREETCOMPLEMENT, ` +
                      `NEIGHBORHOOD, CITY, STATE, EMAIL, MOBILENUMBER, PHONENUMBER) ` +
                      `VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
        const result = await db.query(query, [name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber]);
        await db.query("COMMIT");
        return result.rows;
    } catch (e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.updateCustomer = async (id, name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = `UPDATE CUSTOMERS ` +
                      `SET NAME = $1, CPF = $2, CEP = $3, STREET = $4, STREETNUMBER = $5, STREETCOMPLEMENT = $6, ` +
                      `NEIGHBORHOOD = $7, CITY = $8, STATE = $9, EMAIL = $10, MOBILENUMBER = $11, PHONENUMBER = $12 ` +
                      `WHERE ID = $13`;
        await(db.query(query, [name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber, id]));
        await db.query("COMMIT");
        return result.rows;
    } catch(e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.deleteCustomer = async (id) => {
    const db = await pool.connect();
    try {
        db.query("BEGIN")
        const query = "DELETE FROM CUSTOMERS WHERE ID = $1";
        await(bd.query(query, [id]));
        await db.query("COMMIT");
    } catch(e) {
        await db.query("ROLLBACK");
        sqlErrorHandler(e);
    } finally {
        db.release();
    }
}