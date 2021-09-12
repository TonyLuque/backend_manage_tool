async function getUsers(parent, args, context, info) {
  const { userId } = context;
  return await context.prisma.user.findMany({
    where: {
      role: "USER",
    },
  });
}

async function getUserByEmail(parent, args, context, info) {
  {
    const { userId } = context;
    return await context.prisma.user.findUnique({
      where: {
        email: args.email,
      },
    });
  }
}

module.exports = {
  getUsers,
  getUserByEmail,
};
