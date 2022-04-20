import { test, expect } from "vitest";
test("entry point", async () => {
  const module = await import(".");
  expect(module["entryPoint"]).toBeDefined();
});
