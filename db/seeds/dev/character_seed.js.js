const charactersData = require('../../../data/charactersData');

const createCharacter = async (knex, character) => {
  await knex('characters').insert({
    boggart: character.boggart,
    name: character.name,
    house: character.house,
    role: character.role,
    species: character.species || 'human',
    bloodStatus: character.bloodStatus,
    dumbledorsArmy: character.dumbledorsArmy,
    orderOfThePhoenix: character.orderOfThePhoenix,
    deathEater: character.deathEater,
    ministryOfMagic: character.ministryOfMagic
  });
};

exports.seed = async (knex) => {
  try {
    await knex('characters').del();
    let allCharacters = charactersData.map(character => {
      return createCharacter(knex, character);
    });
    return Promise.all(allCharacters);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
