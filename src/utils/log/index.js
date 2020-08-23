const { blue, red } = require("chalk");

// eslint-disable-next-line no-console
const logInfo = (log) => console.log(blue(log));

// eslint-disable-next-line no-console
const logError = (log) => console.log(red(log));

const logErrorAndExit = (log) => {
  logError(log);
  // eslint-disable-next-line no-process-exit
  process.exit(1);
};

module.exports = {
  logInfo,
  logError,
  logErrorAndExit,
};
