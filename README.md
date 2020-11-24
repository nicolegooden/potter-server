## Potter Server

This backend repository was built to support [Potter](https://github.com/nicolegooden/potter) by [Nicole Gooden](https://github.com/nicolegooden).

### Context

This server was built to solve a problem: the third-party API originally used to support the frontend project crashed after significant progress had been made in the development process.  The owner had worked on a full-stack project in a team environment recently, and resorted to building and connecting this backend to the existing frontend.

Application: *Potter* is an interactive, story-based application inspired by Harry Potter.  Check out the deployed application [here](https://nicolegooden.github.io/potter/).

### Tech

+ Node
+ Express
+ Knex
+ PostgreSQL

### Deployment to Heroku

[Spells](https://potter-server.herokuapp.com/api/v1/spells)

[Houses](https://potter-server.herokuapp.com/api/v1/houses)

[Characters](https://potter-server.herokuapp.com/api/v1/characters)

To retrieve data for a specific character, the `characters` table is queried by matching ID.
For example: `https://potter-server.herokuapp.com/api/v1/characters/4` will return the object containing the details of the character whose ID is 4.

Note: Valid character IDs range from 1 to 26.

### Installation

Terminal:

+ Clone: `git clone git@github.com:nicolegooden/potter-server.git`
+ Transition to repo locally: `cd potter-server`
+ Install packages: `npm i` or `npm install`
+ Start the server: `node server.js`

The application should run on localhost:3001.

When the application is working as expected, this message will log in the terminal:
`Potter Server is running on localhost:3001.`

Postman is a great resource for viewing data resolved from these GET requests.

### Next Steps

+ Add images to `characters` table in the database in order to alleviate the text-heavy feel of the frontend.
+ Insert more columns in the `knex schema` so that character objects include more details (wands, achievements, movie features, etc.)
+ Create more non-student characters to expand choice on the frontend

