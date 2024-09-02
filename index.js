#!/usr/bin/env node

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const issue = require('./middlewares/issue');
const server = express();
const port = require('./port');

server.use(cors())
server.use(bodyParser.json({limit: '5mb'}));


server.post('/issue', issue);

server.get('/', (req, res) => {
    res.send("This is the blockcerts node server")
})

server.listen(port, () => console.log(`Cert-issuer-node-wrapper app listening at http://localhost:${port}`));
