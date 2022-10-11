/*
var mongoose=require('mongoose');
 
var StudentSchema = new mongoose.Schema({
    StudentId:Number,
    Name:String,
    Roll:Number,
    Birthday:Date,
    Address:String
});
 
module.exports = mongoose.model(
    'student', StudentSchema, 'Students');



const schemasJtEventos = require("./config/schemas.database");

*/
//const mongoose = require('mongoose');
const mongo = require("../config/connection.database");


exports.schemasJtEventos = async () => {
    console.log("schemasJtEventos");

    try {
        await mongo.connectDb();

        /*const eventType = new mongoose.Schema({
            Id: Number,
            Description: String
        })

        module.exports = mongoose.model('Test1', eventType, 'Test2');
*/

        var mongoose=require('mongoose');
        
    console.log("2");
        var StudentSchema = new mongoose.Schema({
            StudentId:Number,
            Name:String,
            Roll:Number,
            Birthday:Date,
            Address:String
        });
        
    console.log("3");
        module.exports = mongoose.model(
            'student', StudentSchema, 'Students');


        //mongo.disconnectDb();
    } catch(e) {
        console.log(e);
    }

}