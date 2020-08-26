const sendError = (res) => ({ code, status, message }, errors = []) =>
  res.status(status).json({
    code,
    message,
    errors,
  });

module.exports = sendError;
