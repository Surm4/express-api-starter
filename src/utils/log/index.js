const { blue } = require("chalk");

const logInfo = (log) => console.log(blue(log));

module.exports = {
  logInfo,
};
