const { getDeviceById } = require("../../utils/fakeApi");

async function assignDevice(parent, args, context, info) {
  const data = getDeviceById(args.serial);

  if (data === undefined) {
    throw new Error("El dispositivo no esta registrado en el sistema");
  }

  const device = await context.prisma.device.findUnique({
    where: {
      serial: args.serial,
    },
  });
  if (device !== null) {
    throw new Error("EL dispositivo ya esta asignado");
  }

  return await context.prisma.device.create({
    data: {
      serial: args.serial,
      name: data.name,
      type: data.type,
      operativeSystem: data.operativeSystem,
      owner: { connect: { id: args.idAssignedUser } },
    },
  });
}

module.exports = {
  assignDevice,
};
