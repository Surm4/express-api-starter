const messages = require("../messages");

const Code = {
  validationFailed: "validation_failed",
};

const Response = {
  error: {
    validationFailed: {
      status: 400,
      code: Code.validationFailed,
      message: messages.error.validationFailed,
    },
  },
};

module.exports = Response;
