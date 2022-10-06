const dotenv = require('dotenv').config();
const pg = require('pg-promise');
const promise = require('bluebird');

const pgp = pg({ promiseLib: promise, noLocking: true });
const db = pgp(process.env.DB_URL);

module.exports = db