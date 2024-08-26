import { describe, expect } from "@jest/globals";
import { fetch } from "./tests-helper";

describe("Cat facts Api", () => {
  it("Should get a cat fact with limited length", async () => {
    const response = await fetch({
      endpoint: "/fact",
      queryParam: "max_length=20",
    });

    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      fact: "Cats have 3 eyelids.",
      length: 20,
    });
  });

  it("Should get a random cat fact", async () => {
    const response = await fetch({ endpoint: "/fact" });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("fact", expect.any(String));
    expect(response.data).toHaveProperty("length", expect.any(Number));
  });
});
