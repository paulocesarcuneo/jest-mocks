import _ from "lodash";
import { productSum } from "./productSum";
import * as sums from "./sum";

test("sums", async () => {
  const sum = jest.spyOn(sums, "sum");
  const result = productSum([1, 2, 3], [4, 5, 6]);
  expect(sum).toBeCalledTimes(1);
  expect(sum.mock.calls[0]).toEqual([4, 10, 18]);
  expect(result).toBe(32);
});

test("when arg === 0", async () => {
  const sum = jest.spyOn(sums, "sum");
  const result = productSum(0, [4, 5, 6]);
  expect(sum).toBeCalledTimes(0);
  expect(result).toBe(0);
});