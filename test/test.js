//Lorna Naula & Sekajja Wavamuno Isaac
import { describe, it } from "mocha";
import { assert } from "chai";

describe("Fibonacci Function", () => {
  it("Should return 0 for fibonacci(0)", () => {
    assert.equal(fibonacci(0), 0);
  });
});
