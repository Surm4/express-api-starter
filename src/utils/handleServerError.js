const { logErrorAndExit } = require("./log");

const errorCodes = {
  EACCES: "EACCES",
  EADDRINUSE: "EADDRINUSE",
};

const getErrHandlers = (port) => ({
  [errorCodes.EACCES]: () =>
    logErrorAndExit(`Port ${port} requires elevated privileges`),
  [errorCodes.EADDRINUSE]: () =>
    logErrorAndExit(`Port ${port} is already in use`),
});

const handleServerError = (port) => (error) => {
  if (error.syscall !== "listen") {
    logErrorAndExit(error);
  }

  const errorHandlers = getErrHandlers(port);
  const handler = errorHandlers[error.code];
  if (handler) return handler();

  logErrorAndExit(error);
};

module.exports = handleServerError;
