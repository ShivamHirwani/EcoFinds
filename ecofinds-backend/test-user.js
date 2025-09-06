const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: "Shivam Hirwani",
      email: "shivam@example.com",
      password: "hashedpassword123",
    },
  });
  console.log(newUser);

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
