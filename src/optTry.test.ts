import { optTry } from "./optTry";

it("Shouldn't throw", () => {

    const func = optTry((test: string) => {
        if (test == "grape") {
            throw Error("test");
        } else {
            return test;
        }
    });


    expect(func("grape")).toBeUndefined();
    expect(func("test")).toBe("test");

});

it("Shouldn't throw async", async () => {
    const func = optTry(async (test: string) => {
        if (test == "grape") {
            throw Error("test");
        } else {
            return test;
        }
    });

    await expect(func("grape")).resolves.toBeUndefined();
    await expect(func("test")).resolves.toBe("test");
});