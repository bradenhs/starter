import test from "ava";
import { double } from "./double";

test("it should double", t => {
  const actual = double(2);
  const expected = 4;

  t.is(actual, expected);
});
