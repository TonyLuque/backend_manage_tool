const { getUsers, getUserByEmail } = require("../user/Query");
const { getDevices, getDeviceBySerial } = require("../device/Query");
module.exports = {
  getUsers,
  getUserByEmail,
  getDevices,
  getDeviceBySerial,
};
