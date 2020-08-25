const { isDev } = require("../isEnv");
const { logError } = require("../log");
const { path, pathOr } = require("ramda");

const validationMsg = (isError, errors = []) => ({
  isError,
  errors,
});

const validateSchema = (schema) => (data) => {
  try {
    schema.validateSync(data);
    return validationMsg(false);
  } catch (e) {
    if (isDev()) {
      const message = path(["message"], e);
      logError(message);
    }

    const errors = pathOr([], ["errors"], e);
    return validationMsg(true, errors);
  }
};

module.exports = validateSchema;
