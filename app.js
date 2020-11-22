const { response } = require("express");
const express = require("express");
const app = express();

const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

app.locals.title = "Test Potter";
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Potter Server');
});

app.get('/api/v1/houses', async (req, res) => {
  try {
    const houses = await database('houses').select();
    res.status(200).json(houses);
  } catch (e) {
    res.status(500).json({e});
  }
});

app.get('/api/v1/spells', async (req, res) => {
  try {
    const spells = await database('spells').select();
    res.status(200).json(spells);
  } catch (e) {
    res.status(500).json({e});
  }
});

app.get('/api/v1/characters', async (req, res) => {
  try {
    const characters = await database('characters').select();
    res.status(200).json(characters);
  } catch (e) {
    res.status(500).json({e});
  }
});

app.get('/api/v1/characters/:id', async (req, res) => {
  try {
    const character = await database('characters').where('_id', req.params.id).select();
    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).json({
        error: `Could not find character with id ${req.params.id}`
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = app;