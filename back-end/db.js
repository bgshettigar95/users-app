const moongose = require('mongoose');

moongose.connect('mongodb+srv://Bhagya:Infy@123@cluster0-jb1vx.mongodb.net/userDB?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (!err)
            console.log("Mongo DB connection Succeeded ...");
        else
            console.log("Error in MongoDB connection :" + JSON.stringify(err, undefined, 2));

    });

module.exports = moongose;