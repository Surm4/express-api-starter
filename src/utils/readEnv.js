const { logError } = require("./log");
const readEnv = (envKey) => {
  const envValue = process.env[envKey];

  if (!envValue) {
    const msg = `Enviromental variable ${envKey} does not exist`;
    logError(msg);
    throw new Error(msg);
  }

  return envValue;
};

module.exports = readEnv;
