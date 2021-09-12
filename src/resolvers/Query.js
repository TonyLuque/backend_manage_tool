const { getUsers } = require("../user/Query");
const { getDevices, getDeviceBySerial } = require("../device/Query");
module.exports = {
  getUsers,
  getDevices,
  getDeviceBySerial,
};
