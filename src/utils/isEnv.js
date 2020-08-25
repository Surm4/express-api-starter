const readEnv = require("./readEnv");
const nodeEnv = require("./nodeEnv");

const isProd = () => readEnv("NODE_ENV") === nodeEnv.production;
const isDev = () => readEnv("NODE_ENV") === nodeEnv.development;

module.exports = {
  isProd,
  isDev,
};
