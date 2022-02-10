// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';

export const newOrderDb = factory({
  newOrderList: {
    orderNr: primaryKey(Number),
    clientName: String,
    segment: String,
    salesSource: String
  }
});

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 42; i++) {
  newOrderDb.newOrderList.create({
    orderNr: i + 10001,
    clientName: faker.name.findName(),
    segment: Math.random() > 0.5 ? 'Business' : 'Private',
    salesSource: faker.company.companyName()
  });
}
