/**
 * Will use this file to connect to DB and execute queries
 */


const mongoose = require('mongoose');

const connect = () => {
    console.log("Mongodb connection requested");
    return mongoose.connect('mongodb://localhost/democra');
}
App.listen(3000, async() => {
    // this callback will be executed everytime the server starts
    await connect();
    console.log("Mongo db connected successfully");
    console.log("Server Started Successsfully");


});
// module.exports = {
//     connect
// }



// async function dbOperation() {

//     try {

//         const studs = await Student.where("age").gt(60).where("name").equals("Akash");

//         const roles = await Roles.find();
//         console.log(studs);




//     } catch (err) {
//         console.log(err);
//     }

// }

// /**
//  * Execute the function
//  */
// dbOperation();