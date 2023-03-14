import formSlice, { postNewRobot } from "./formSlice";

describe("initializer reducer", () => {
  it("should hanldle initial state", () => {
    expect(formSlice(undefined, { type: "unknown" })).toEqual({
      robots: [],
      status: "idle",
    });
  });

  it("should handle loading status", () => {
    const loading = formSlice(undefined, postNewRobot.pending);
    expect(loading.status).toEqual("loading");
  });

  it("should handle failed status", () => {
    const loading = formSlice(undefined, postNewRobot.rejected);
    expect(loading.status).toEqual("failed");
  });

  it("should handle idle status", () => {
    const loading = formSlice(undefined, postNewRobot.fulfilled);
    expect(loading.status).toEqual("idle");
  });
});
