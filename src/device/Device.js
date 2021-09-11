function owner(parent, args, context) {
  return context.prisma.device
    .findUnique({
      where: { id: parent.id },
    })
    .owner();
}

module.exports = {
  owner,
};
