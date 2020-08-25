const messages = require("../messages");

const responseCode = {
  error: {
    validationFailed: {
      status: 400,
      code: "validation_failed",
      message: messages.error.validationFailed,
    },
  },
};

module.exports = responseCode;
