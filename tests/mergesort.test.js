import { mergesort } from "../src/mergesort";

describe("mergesort", () => {
  test("null array returns itself", () => {
    expect(mergesort([])).toStrictEqual([]);
  });
  test("single element array returns itself", () => {
    expect(mergesort([73])).toStrictEqual([73]);
  });
  test("sorted array remains unchanged", () => {
    expect(mergesort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
  test("mergesort works", () => {
    expect(mergesort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });
  test("mergesort works", () => {
    expect(mergesort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
  });
});
