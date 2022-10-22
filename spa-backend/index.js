var dotenv = require('dotenv').config();

const app = require('./app');

const protocol = process.env.PROTOCOL || 'http';
const domain = process.env.DOMAIN || 'localhost';
const port = process.env.PORT || 3001;
const database = require('./database/database');
const server = app.listen(port, () => {
    console.log(`App running on port ${protocol}://${domain}:${port}`);
});