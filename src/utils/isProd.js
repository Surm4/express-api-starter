const readEnv = require("./readEnv");
const nodeEnv = require("./nodeEnv");

const isProd = () => readEnv("NODE_ENV") === nodeEnv.production;

module.exports = isProd;
