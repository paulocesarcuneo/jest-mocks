import { fetchData, fetchDataTwice } from "./api";
import axios from "axios";

jest.mock("axios");


global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 100,
    statusText: "OK",
    ok: true,
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);
/*
o mas fácil usar: jest-mock-fetch
 */

test("mocks fetchData 1 2 3", async () => {
  axios.get.mockResolvedValue({ data: [1, 2, 3] });
  const result = await fetchData();
  expect(result).toBe(6);
  // expect(axios.get).toBeCalledTimes(1);
  // expect(axios.get.mock.calls[0]).toEqual(["/some/data"]);
  // expect(axios.get).toHaveBeenCalledWith("/some/data");
});

test("mocks fetchData 4 5 6", async () => {
  axios.get.mockResolvedValue({ data: [4, 5, 6] });
  const result = await fetchData();
  expect(result).toBe(15);
  expect(axios.get).toBeCalledTimes(1);
  // expect(axios.get.mock.calls[0]).toEqual(["/some/data"]);
  expect(axios.get).toHaveBeenCalledWith("/some/data");
});

test("mocks fetchDataTwice", async () => {
  axios.get
    .mockResolvedValue({ data: [1, 2, 3] })
    .mockResolvedValue({ data: [4, 5, 6] })
    ;
  const result = await fetchDataTwice();
  expect(result).toBe(30);
  expect(axios.get).toBeCalledTimes(2);
  expect(axios.get).toHaveBeenCalledWith("/some/data");
  expect(axios.get).toHaveBeenNthCalledWith(2, "/some/otherdata");
});
