const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    /* const woopa = await prisma.Explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.Explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.Explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.Explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.Explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Node4'
        },
      });

    console.log('Create 3 explorers'); */

    const tipoDsoa = await prisma.tipo.upsert({
        where: { name: 'uno' },
        update: {},
        create: {
          name: 'uno',
                  lang: 'sqldos',
                  missionCommander: 'Aldo',
                  enrollments: 2
        },
      });

      const tipotres = await prisma.tipo.upsert({
        where: { name: 'dos' },
        update: {},
        create: {
          name: 'dos',
                  lang: 'postgress',
                  missionCommander: 'niko',
                  enrollments: 4
        },
      });


      console.log('Create 2 explorers');


  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();