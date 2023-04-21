const express = require('express');
const app = express()


// Your code goes here
const Subscriber = require('./models/subscribers');

// GET http://localhost:3000/subscribers
app.get('/subscribers', (req, res) => {
    Subscriber.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})
// GET http://localhost:3000/subscribers/names
app.get('/subscribers/names', (req, res) => {
    Subscriber.find()
        .then((data) => {
            res.send(data.map(el => ({ name: el.name, subscribedChannel: el.subscribedChannel })))

        })

})

// GET http://localhost:3000/subscribers/:id
app.get('/subscribers/:id', (req, res) => {
    const { id } = req.params
//    Subscriber.find({ _id: id })
//        .then(data => {
//            res.send(...data)
//        })
    Subscriber.findOne({ _id: id })
        .then(data => {
            res.send(data)
        })
        .catch((error) => {
            res.status(400).send({ message: error.message })
        })
})

module.exports = app;
