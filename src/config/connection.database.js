const { mongoose } = require('mongoose');

try {
  const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_FULLNAME}/?retryWrites=true&w=majority`;
  mongoose.Promise = global.Promise;
  mongoose.connect(db, { dbName: process.env.DB_NAME, connectTimeoutMS: 1000, useNewUrlParser: true, useUnifiedTopology: true },
    function (error) {
      if (error) {
        console.log("MongoDB Error! " + error);
      } else {
        console.log("Conectado do mongoDB")
      }
    }
  );
} catch (e) {
  console.log(e)
}