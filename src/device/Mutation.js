async function assignDevice(parent, args, context, info) {
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
      name: args.deviceName,
      type: args.deviceType,
      operativeSystem: args.deviceOS,
      owner: { connect: { id: args.idAssignedUser } },
    },
  });
}

module.exports = {
  assignDevice,
};
