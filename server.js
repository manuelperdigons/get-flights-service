const dotenv = require('dotenv').config({ path:  `${__dirname}/config.env` });
const app = require('./app');

const port = 3000;
const server = app.listen(port, () => {
    console.log(`App running on port: ${port}`);
})