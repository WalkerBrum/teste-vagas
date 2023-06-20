const { Router } = require('express');

const { getUser, getUsers} = require("../controllers/teste1");
const { createUser } = require("../controllers/teste2");
const { deleteUser } = require("../controllers/teste3");
const { updateUser } = require("../controllers/teste4");
const { userReadTimes } = require("../controllers/teste5");
const { validationUserPermission } = require('../shared/middlewares/validationUserPermission');

const routes = Router();

routes.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

routes.get("/user", getUser);
routes.get("/users", getUsers);
routes.post("/users/:id", validationUserPermission('create'), createUser)
routes.delete("/users/:id", validationUserPermission('delete'), deleteUser);
routes.put("/users/:id", validationUserPermission('update'), updateUser)
routes.get("/users/access", userReadTimes);

module.exports = routes;