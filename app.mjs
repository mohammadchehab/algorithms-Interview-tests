import { threeNumberSum } from "./arrays/threeNumberSum.mjs";
import { bubbleSort } from "./arrays/bubbleSort.mjs";
import { largestRange } from "./arrays/largestRange.mjs";
import { smallestDifference } from "./arrays/smallestDifference.mjs";
import { moveElementToEnd } from "./arrays/moveElementToEnd.mjs";
import { isMonotonic } from "./arrays/monotonicArray.mjs";
import { spiralTraverse } from "./arrays/sprialTraverse.mjs";
import { numberMultiply } from "./arrays/numberMiltiply.mjs";
import { longestPeak } from "./arrays/longestPeak.mjs";
import {isAwesomeNumber} from "./arrays/isAwesomeNumber.mjs"
import { strict as assert } from "assert";

assert.deepEqual(isAwesomeNumber(6), [1,2,3]);

assert.deepEqual(
  longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]),
  6,
  "Failed 6"
);

assert.deepEqual(
  numberMultiply([2, 4, 6, 5, 40, -1], 20),
  [4, 5],
  "Failed [4,5]"
);

/*
    assert.deepEqual(
      spiralTraverse(
        [
          [1, 2, 3, 4],
          [12, 13, 14, 5],
          [11, 16, 15, 6],
          [10, 9, 8, 7],
        ],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
      ),
      "TestCase Failed spiralTraverse [1,2,3,4]"
    );
    */

assert.strictEqual(isMonotonic([]), true, "TestCase Failed Monotnic");

assert.deepEqual(
  moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2),
  [4, 1, 3, 2, 2, 2, 2, 2],
  "Failed Test Case with [4, 1, 3, 2, 2, 2, 2, 2"
);

assert.deepEqual(
  smallestDifference([10, 0, 20, 25, 2200], [1005, 1006, 1014, 1032, 1031]),
  [25, 1005],
  "[25, 1005] Test Case Failed"
);

assert.deepEqual(
  smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]),
  [20, 17],
  "[20, 17] Test Case Failed"
);

assert.deepEqual(
  smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]),
  [28, 26],
  "[28,26] Test Case Failed"
);

assert.deepEqual(
  largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]),
  [0, 7],
  "Test Case Failed"
);

assert.deepEqual(
  threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0),
  [
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5],
  ],
  "Test Case Failed"
);

assert.deepEqual(
  bubbleSort([-1, 5, 0, -5, 3, 2, 8]),
  [-5, -1, 0, 2, 3, 5, 8],
  "Test Case Failed"
);
