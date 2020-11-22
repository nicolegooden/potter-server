const charactersData = [
  {
    boggart: 'corpse of sister, Ariana Dumbledore',
    name: 'Albus Dumbledore',
    house: 'Gryffindor',
    role: 'headmaster',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: true
  },
  {
    name: 'Colin Creevey',
    house: 'Gryffindor',
    role: 'student',
    bloodStatus: 'half-blood',
    dumbledorsArmy: true,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'dementor',
    name: 'Harry Potter',
    house: 'Gryffindor',
    role: 'student',
    bloodStatus: 'half-blood',
    dumbledorsArmy: true,
    orderOfThePhoenix: true,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'failure',
    name: 'Hermione Granger',
    house: 'Gryffindor',
    role: 'student',
    bloodStatus: 'muggle-born',
    dumbledorsArmy: true,
    orderOfThePhoenix: true,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'serpent',
    name: 'Ginevra Weasley',
    house: 'Gryffindor',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: true,
    orderOfThePhoenix: true,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'spiders',
    name: 'Ronald Weasley',
    house: 'Gryffindor',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: true,
    orderOfThePhoenix: true,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'Severus Snape',
    name: 'Neville Longbottom',
    house: 'Gryffindor',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: true,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    name: 'Sirius Black',
    house: 'Gryffindor',
    role: 'prisoner',
    bloodStatus: 'half-blood',
    dumbledorsArmy: false,
    orderOfThePhoenix: true,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'Lord Voldemort',
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    name: 'Pomona Sprout',
    house: 'Hufflepuff',
    role: 'professor',
    bloodStatus: 'unknown',
    dumbledorsArmy: true,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    name: 'Zacharias Smith',
    house: 'Hufflepuff',
    role: 'student',
    bloodStatus: 'unknown',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'Lord Voldemort',
    name: 'Hannah Abbott',
    house: 'Hufflepuff',
    role: 'student',
    bloodStatus: 'muggle-born',
    dumbledorsArmy: true,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'Lord Voldemort',
    name: 'Justin Finch-Fletchley',
    house: 'Hufflepuff',
    role: 'student',
    bloodStatus: 'unknown',
    dumbledorsArmy: true,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    name: 'Ernest Macmillan',
    house: 'Hufflepuff',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: true,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'Lord Voldemort',
    name: 'Garrick Ollivander',
    house: 'Ravenclaw',
    role: 'wandmaker',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    name: 'Cho Chang',
    house: 'Ravenclaw',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: true,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'being someone she\'s not',
    name: 'Luna Lovegood',
    house: 'Ravenclaw',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: true,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'being left out',
    name: 'Myrtle Warren',
    house: 'Ravenclaw',
    role: 'student',
    species: 'ghost',
    bloodStatus: 'muggle-born',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    name: 'Terry Boot',
    house: 'Ravenclaw',
    role: 'student',
    bloodStatus: 'unknown',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'Lord Voldemort',
    name: 'Padma Patil',
    house: 'Ravenclaw',
    role: 'student',
    bloodStatus: 'half-blood',
    dumbledorsArmy: false,
    orderOfThePhoenix: true,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'Harry Potter',
    name: 'Bellatrix Lestrange',
    house: 'Slytherin',
    role: 'Voldemort\'s friend',
    bloodStatus: 'unknown',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'Lord Voldemort',
    name: 'Vincent Crabbe',
    house: 'Slytherin',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: true,
    ministryOfMagic: false
  },
  {
    boggart: 'being worse off than Harry Potter',
    name: 'Draco Malfoy',
    house: 'Slytherin',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: true,
    ministryOfMagic: false
  },
  {
    name: 'Gregory Goyle',
    house: 'Slytherin',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: true,
    ministryOfMagic: false
  },
  {
    boggart: 'Lord Voldemort',
    name: 'Millicent Bulstrode',
    house: 'Slytherin',
    role: 'student',
    bloodStatus: 'unknown',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: false,
    ministryOfMagic: false
  },
  {
    boggart: 'Harry Potter',
    name: 'Tom Riddle',
    house: 'Slytherin',
    role: 'student',
    bloodStatus: 'pure-blood',
    dumbledorsArmy: false,
    orderOfThePhoenix: false,
    deathEater: true,
    ministryOfMagic: false
  }
];

module.exports = charactersData;