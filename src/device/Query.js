const { getDeviceById } = require("../../utils/fakeApi");

async function getDevices(parent, args, context, info) {
  const { userId } = context;
  return await context.prisma.device.findMany();
}

async function getDeviceBySerial(parent, args, context, info) {
  const { userId } = context;
  const deviceAPI = getDeviceById(args.serial);

  const deviceBD = await context.prisma.device.findUnique({
    where: {
      serial: args.serial,
    },
  });

  if (deviceAPI && deviceBD) {
    return deviceBD;
  }
  return deviceAPI;
}

module.exports = {
  getDevices,
  getDeviceBySerial,
};
