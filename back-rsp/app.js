require ("./db/mongo");
const {PORT} = require("./utils/config");
const cors = require('cors');
const express = require('express');
const {handlerError, logger,handlerNotFound} = require("./utils/middelwares");
const People = require("./models/People");

const starWarsRouter = require('./routes/starwarsRouter');
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const app = express();

app.use(express.json());
app.use(logger);
app.use(cors());
app.use('/api/starwars', starWarsRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

app.get("/", (req, res) => {

    res.send("Star wars backend");

});

app.use(handlerNotFound);
app.use(handlerError);
  app.listen(PORT, () => {

    console.log("Puerto: " + PORT);
});
