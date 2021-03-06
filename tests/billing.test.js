import { calculateCost } from "../libs/billing-lib";

test("Lowest tier", () => {
  const storage = 10;
  const cost = 4000;
  const expectedcost = calculateCost(storage);
  expect(cost).toEqual(expectedcost);
});

test("Middle tier", () => {
  const storage = 100;
  const cost = 20000;
  const expectedcost = calculateCost(storage);
  expect(cost).toEqual(expectedcost);
});

test("Highest tier", () => {
  const storage = 101;
  const cost = 10100;
  const expectedcost = calculateCost(storage);
  expect(cost).toEqual(expectedcost);
});
