const express = require('express');
const cors = require('cors')


const { PORT } = require('./constants');
const routes = require('./routes');
const { initDatabase } = require('./config/database-config');

const app = express();

const url = "http://localhost:3000";

require('./config/express-config')(app);

app.use(cors({
    origin: url,
    optionsSuccessStatus: 200
}));

app.use(routes);
initDatabase()
    .then(() =>{
        app.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}/`));
    })
    .catch(err => {
        console.log('Can\'t connect to the database', err);
    });