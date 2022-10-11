const { mongoose } = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

exports.connectDb = async () => {
  const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.uttggz2.mongodb.net/?retryWrites=true&w=majority`;
  
  mongoose.Promise = global.Promise;
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true },
    function (error) {
      if (error) {
        console.log("MongoDB Error! " + error);
      } else {
        console.log("Conectado ao banco mongodb");
      }
    }
  );
};

exports.disconnectDb = async () => {
  mongoose.connection.close()
}