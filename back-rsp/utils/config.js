require('dotenv').config();

const PORT = process.env.PORT || 3000;
const URI_MONGO = process.env.URI_MONGO;
const SECRET = process.env.SECRET;

module.exports = {
    PORT,
    URI_MONGO,
    SECRET
};