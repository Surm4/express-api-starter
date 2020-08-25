const resError = (res) => ({ code, status, message }, errors = []) =>
  res.status(status).json({
    code,
    message,
    errors,
  });

module.exports = resError;
