import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10;

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
    },
  });

  const normalUser = await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      name: 'John Doe',
    },
  });

  console.log('Seeding terminé !');
  console.log({ adminUser, normalUser });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
