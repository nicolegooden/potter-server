const housesData = require('../../../data/housesData');

const createHouse = async (knex, house) => {
  await knex('houses').insert({
    name: house.name,
    headOfHouse: house.headOfHouse,
    founder: house.founder,
    houseGhost: house.houseGhost,
    mascot: house.mascot,
    color1: house.color1,
    color2: house.color2,
    value1: house.value1,
    value2: house.value2,
    value3: house.value3,
    value4: house.value4
  });
};

exports.seed = async (knex) => {
  try {
    await knex('houses').del();
    let allHouses = housesData.map(house => {
      return createHouse(knex, house);
    });
    return Promise.all(allHouses);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};