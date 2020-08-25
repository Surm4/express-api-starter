const { isProd } = require("./isEnv");
const { pathOr, path } = require("ramda");

// eslint-disable-next-line no-unused-vars
const handleAppErrors = (err, req, res, next) => {
  const message = isProd() ? "Something went wrong :(" : path(["message"], err);
  const error = isProd() ? null : err;

  const status = pathOr(500, ["status"], err);

  res.status(status);
  res.json({ status, message, error });
};

module.exports = handleAppErrors;
