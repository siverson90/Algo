const express = require('express');
const app = express();
const logger = require('morgan');
// const routes = require("./routes/routes.js");
const axios = require('axios');
const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();

const websocket = new Gdax.WebsocketClient(['BTC-USD']);

websocket.on('message', data => console.log(data));
websocket.on('error', err => console.log(err));
websocket.on('close', () => { /* ... */ });

app.use(logger('dev'));

const callback = (error, response, data) => {
    if (error)
        return console.log(error);
    return console.log(data);
}



app.listen(3000, () => console.log('Example app listening on port 3000!'))
