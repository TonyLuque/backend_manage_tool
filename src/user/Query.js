function getUsers(parent, args, context, info) {
  const { userId } = context;
  return context.prisma.user.findMany({
    where: {
      role: "USER",
    },
  });
}

module.exports = {
  getUsers,
};
