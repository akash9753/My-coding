const express = require("express");
const utils = require("../utils");
const User = require("../models/product");

const router = express.Router();

router.post("/createUser", (request, response) => {
  const { name, email, password } = request.body;
  console.log(request.body);

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = password;

  user.save((error, dbResult) => {
    response.send(utils.createResult(error, dbResult));
  });
});

module.exports = router;
