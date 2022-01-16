const express = require('express');
const server = express();
const PORT = 3000;
const { Client } = require('pg');
var connectionString = "mobcoder://mobcoder:mobcoder@localhost:5432/sammy";

const client = new Client({
    connectionString: connectionString
});
let count = 0;

server.get('/', (req, res) => {
    count ++
    res.status(200).send(`Hello world this has been visited ${count} times.`)
});
client.connect();
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
