import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      name: "Lovely app",
    },
    {
      name: "Dark mode",
    },
        {
       name: "Mobile Layout",
    },
  ];

  const promises = data.map((p) =>
    prisma.project.create({
      data: p,
    })
  );

  await Promise.all(promises);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
