const express = require("express");

const Hobbits = require("../hobbits/hobbitsModel.js");

const server = express();

server.use(express.json());

//assumptions we can make & test
//returns http 200
//returns json
//body has an api property and the value is "up"

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});


server.get("/hobbits", (req, res) => {
  Hobbits.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
