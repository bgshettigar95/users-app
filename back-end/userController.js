const express = require('express');
var router = express.Router();

var { User } = require('./users');

router.get('/', (req, res) => {
    User.find((err, docs) => {

        if (!err) { res.send(docs); }
        else { console.log("Error in Retreiving" + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {


    // if (!ObjectId.isValid(req.params.id))
    //     return res.status(400).send(`No record of a given ID : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {

        if (!err) { res.send(doc); }
        else { console.log("Error in Retreiving" + JSON.stringify(err, undefined, 2)); }
    });
});




router.post('/', (req, res) => {
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        phone: req.body.phone

    });

    user.save((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log("Error in Saving" + JSON.stringify(err, undefined, 2)); }
    });
});



router.put('/:id', (req, res) => {

    var user = {

        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        phone: req.body.phone

    };


    User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {


        if (!err) { res.send(doc); }
        else { console.log("Error in User Update" + JSON.stringify(err, undefined, 2)); }
    });
});



router.delete('/:id', (req, res) => {



    User.findByIdAndRemove(req.params.id, (err, doc) => {

        if (!err) { res.send(doc); }
        else { console.log("Error in User Delete" + JSON.stringify(err, undefined, 2)); }
    });
});





module.exports = router;