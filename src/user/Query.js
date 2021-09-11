function getUsers(parent, args, context, info) {
  return context.prisma.user.findMany({
    where: {
      role: "USER",
    },
  });
}

module.exports = {
  getUsers,
};
