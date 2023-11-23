import { faker } from "@faker-js/faker";

const user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

export default {
  user,
};
