const moongose = require('mongoose');

moongose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (!err)
            console.log("Mongo DB connection Succeeded ...");
        else
            console.log("Error in MongoDB connection :" + JSON.stringify(err, undefined, 2));

    });

module.exports = moongose;