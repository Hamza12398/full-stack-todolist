// import { PrismaClient } from "@prisma/client";
// import { faker } from "@faker-js/faker";

// const prisma = new PrismaClient();

// async function main() {
//   // ... you will write your Prisma Client queries here
//   // const user = await prisma.user.createMany({
//   //   data: {
//   //     email: faker.internet.email(),
//   //     name: faker.internet.userName(),
//   //     address: {
//   //       city: faker.location.city(),
//   //       state: faker.location.state(),
//   //       zip: faker.location.zipCode(),
//   //       street: faker.location.street(),
//   //     },
//   //   },
//   // });
//     await prisma.todo.createMany({
//       // data: Array.from({length: 20} , () => ({
//       //   title: faker.lorem.sentence(),
//       //   completed: faker.datatype.boolean(),
//       // }))
//       data: {
//         title: faker.lorem.sentence(),
//         completed: faker.datatype.boolean(),
//       },
//     })

// }

// main()
//   .catch(async (e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  await prisma.test.create({
    data: {
      title: faker.lorem.sentence(),
      body: "This is The body",
    },
  });
}

main();
