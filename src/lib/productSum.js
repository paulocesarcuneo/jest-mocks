import _ from "lodash";
import { sum } from "./sum";

export const productSum = (a, b) => {
  if (a !== 0) return sum(..._.zip(a, b).map(([x, y]) => x * y));
  else return 0;
};
