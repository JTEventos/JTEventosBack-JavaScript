const mongoErrorHandler = require("./utils/handle-mongo-error");
const EventModel = require("../models/event.model");

exports.checkIfExists = async (id) => {
    const db = await pool.connect();
    try {
        const query = `SELECT * FROM EVENT WHERE ID = $1`;
        const result = await db.query(query, [id]);
        return result.rowCount;
    } catch(e) {
        mongoErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.findAll = async () => {
    const db = await pool.connect();
    try {
        const query = `SELECT * FROM EVENT`;
        return await db.query(query);
    } catch(e) {
        mongoErrorHandler(err);
    } finally {
        db.release();
    }
}

exports.createEvent = async (eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    try {
        const eventType = new EventModel({
            eventTypeId: eventTypeId,
            customerId: customerId,
            establishmentId: establishmentId,
            description: description,
            startDate: startDate,
            finishDate: finishDate,
            inviteList: inviteList}
        );
        await eventType.save();
    } catch (error) {
        mongoErrorHandler(error);
    }
}

exports.updateEvent = async (id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    const db = await pool.connect();
    try {
        const query = `UPDATE EVENT SET EVENTTYPEID = $1, CUSTOMERID = $2, ESTABLISHMENTID = $3, DESCRIPTION = $4, ` +
                      `STARTDATE = $5, FINISHDATE = $6, INVITELIST = $7 WHERE ID = $8`;
        await(db.query(query, [eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList, id]));
    } catch(e) {
        mongoErrorHandler(e);
    } finally {
        db.release();
    }
}

exports.deleteEvent = async (id) => {
    const db = await pool.connect();
    try {
        const query = "DELETE FROM EVENT WHERE ID = $1";
        await(db.query(query, [id]));
    } catch(e) {
        mongoErrorHandler(e);
    } finally {
        db.release();
    }
}