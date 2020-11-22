const spellsData = require('../../data/spellsData');

const createSpell = async (knex, spell) => {
  await knex('spells').insert({
    spell: spell.spell,
    type: spell.type,
    effect: spell.effect
  });
};

exports.seed = async (knex) => {
  try {
    await knex('spells').del();
    let allSpells = spellsData.map(spell => {
      return createSpell(knex, spell);
    });
    return Promise.all(allSpells);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
