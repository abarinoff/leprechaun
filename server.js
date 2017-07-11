const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/src/front-end/index.html');
});


MongoClient.connect('mongodb://localhost/leprechaun', (err, database) => {

    app.get('/expenses', (request, response) => {
        database.collection('expenses').find().toArray(function(err, result) {
            if (err) return console.log(err)

            response.status(200).send(result);
        })
    });

    app.post('/expenses', (request, response) => {
        database.collection('expenses').save(request.body, (err, result) => {
            if (err) return console.log(err)

            response.status(200).send({});
        });
    });

    app.listen(3000, function() {
        console.log('listening on 3000')
    });
});
