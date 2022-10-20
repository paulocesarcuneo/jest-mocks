import axios from "axios";
import { sum } from "./sum";

export const fetchData = async () => {
  const { data } = await axios.get("/some/data");
  return sum(...data);
};

export const fetchDataTwice = async () => {
  const { data: data1 } = await axios.get("/some/data");
  const { data: data2 } = await axios.get("/some/otherdata");

  return sum(...data1, ...data2);
};
