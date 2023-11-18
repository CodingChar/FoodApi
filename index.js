const {Server}  = require('./Server.js')
const mongoose  = require('mongoose')


require('dotenv').config()


/*

    connect to the database 
    -> if it doesn't return an error execute the Server(), function.
    if it does.. show the error on the console.

*/


console.log("Attempting Connecting to the Database");
main().catch(err => console.log(err))


async function main(){
    await mongoose.connect(process.env.MONGO_CON)
    console.log("Your application has connected to the Database")
    Server(process.env.PORT)
}