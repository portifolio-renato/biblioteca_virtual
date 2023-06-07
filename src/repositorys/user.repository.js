const prisma = require('../services/prisma');

const createUser = async (data) => {
  console.log(data);
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true
    }
  })
  return user
}

module.exports = createUser;
