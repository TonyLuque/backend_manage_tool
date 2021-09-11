async function assignDevice(parent, args, context, info) {
  return await context.prisma.device.create({
    data: {
      serial: args.serial,
      name: args.deviceName,
      type: args.deviceType,
      operativeSystem: args.deviceOS,
      ownerId: { connect: { id: args.idAssignedUser } },
    },
  });
}

module.exports = {
  assignDevice,
};
