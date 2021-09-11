function getDevices(parent, args, context, info) {
  return context.prisma.device.findMany();
}

module.exports = {
  getDevices,
};
