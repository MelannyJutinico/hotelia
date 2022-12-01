const mongoose = require("mongoose");

const conexionDB = async() => {
    const url= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.pkczpyx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
    //mongodb://${process.env.USER}:${process.env.PASSWORD}@ac-n50bnr8-shard-00-00.pkczpyx.mongodb.net:27017,ac-n50bnr8-shard-00-01.pkczpyx.mongodb.net:27017,ac-n50bnr8-shard-00-02.pkczpyx.mongodb.net:27017/${process.env.DBNAME}?ssl=true&replicaSet=atlas-12akaz-shard-0&authSource=admin&retryWrites=true&w=majority
    try{
        const DB=await mongoose.connect(url);
        console.log("conexion satisfactoria", DB.connection.name);
    }catch(error) {
        console.log(error);
    }
}

module.exports = conexionDB;