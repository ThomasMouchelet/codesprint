const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const internalIp = require('internal-ip');
const figlet = require('figlet');
const axios = require('axios');

const URL_API = "https://pokeapi.co/api/v2/pokemon/18/";

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    axios.get(URL_API)
        .then(response => {
            let pokemon = response.data
            res.render('index', { pokemon: pokemon });
        })
        .catch(error => {
            console.log(error);
        });
})

http.listen(port, function () {
    figlet('Pokemon app', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log("\x1b[36m", data)
        console.log("\x1b[36m", `> http://localhost:${port}`)
        console.log("\x1b[32m", `> http://${internalIp.v4.sync()}:${port}`)
    });
});
