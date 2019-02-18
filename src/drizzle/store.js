import Drizzle from 'drizzle';

const drizzle = new Drizzle.Drizzle({
  contracts: []
});
let drizzleStore = drizzle.store;

export { drizzleStore };