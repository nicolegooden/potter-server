const express = require("express");
const app = express();

const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

app.locals.title = "Test Potter";
app.use(express.json());

app.get('/', (req, res) => {
  response.send('Potter Server');
});

app.get("/api/v1/houses", async (req, res) => {
  try {
    const houses = await database('houses').select();
    res.status(200).json(houses);
  } catch (e) {
    res.status(500).json({e});
  }
});

app.get("/api/v1/spells", async (req, res) => {
  try {
    const spells = await database('spells').select();
    res.status(200).json(spells);
  } catch (e) {
    res.status(500).json({e});
  }
});

app.get("/api/v1/characters", async (req, res) => {
  try {
    const characters = await database('characters').select();
    res.status(200).json(characters);
  } catch (e) {
    res.status(500).json({e});
  }
});

module.exports = app;