require('dotenv').config();

module.exports = {
    key: process.env.SECRET_KEY,
    expiresIn: "80000d"
}