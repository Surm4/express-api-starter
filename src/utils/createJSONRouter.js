const express = require("express");

const createJSONRouter = () => {
  const router = express.Router();
  router.use(express.json());

  return router;
};

module.exports = createJSONRouter;
