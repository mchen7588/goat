import { identity } from "../../src";

describe("identity", () => {
  test("given a parameter then return the parameter supplied to it", () => {
    const one = identity(1);
    const helloWorld = identity("hello, world");

    expect(one()).toBe(1);
    expect(helloWorld()).toBe("hello, world");
  });
});

