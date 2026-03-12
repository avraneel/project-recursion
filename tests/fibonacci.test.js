import { fibs, fibsRec } from "../src/fibonacci";

describe("fibonacci", () => {
  test("less than equal to 0 gives [0]", () => {
    expect(fibs(-2)).toStrictEqual([0]);
    expect(fibsRec(-2)).toStrictEqual([0]);
  });
  test("fibonacci for normal term", () => {
    expect(fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibsRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
