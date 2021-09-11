const { signup, login, createUser } = require("../user/Mutation");
const { assignDevice } = require("../device/Mutation");

module.exports = {
  signup,
  login,
  assignDevice,
  createUser,
};
