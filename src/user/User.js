function devices(parent, args, context) {
  return context.prisma.user.findUnique({ where: { id: parent.id } }).devices();
}

module.exports = {
  devices,
};
