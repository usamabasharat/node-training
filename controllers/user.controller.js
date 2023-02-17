const userService = require("../dal/user.dao");
const userValidator = require("../validators/user.validator");

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};

async function createUser(req, res) {
  const reqBody = req.body;

  const { error } = userValidator.userSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  const user = await userService.addOne(reqBody);
  res.send({ user });
}

async function getUsers(req, res) {
  let users = await userService.findWhere({
    where: {
      AND: [
        { points: { gt: 1 } },
        { OR: [{ points: { equals: 2 } }, { points: { equals: 5 } }] },
      ],
    },
  });
  res.send(users);
}

async function updateUser(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;

  const { error } = userValidator.userUpdateSchema.validate({
    ...reqObject,
    id,
  });
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }

  let updateUser = await userService.update({
    where: { id },
    data: {
      ...reqObject,
    },
  });

  res.send(updateUser);
}

async function deleteUser(req, res) {
  let { id } = req.params;

  id = Number(id);

  let deleteUser = await userService.deleteOne(id);

  res.send(deleteUser);
}
