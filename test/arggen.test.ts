import { expect } from "chai";
import Arggen from "../src/arggen";

describe("Testing Arggen", (): void => {
  const defaultArgs = [];

  it("Class Arggen can be instanciated", (): void => {
    expect((): void => {
      new Arggen(...defaultArgs);
    }).not.to.throw();
  });
});
