const { logInfo } = require("./log");

const handleServerListening = (server) => () => {
  const addr = server.address();

  logInfo(`Listening on port: ${addr.port}`);
};

module.exports = handleServerListening;
