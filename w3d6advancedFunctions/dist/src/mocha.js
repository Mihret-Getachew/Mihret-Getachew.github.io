function describe(testGroup, callback) {
    console.log(`\Test Name: ${testGroup}`);
    callback();
}
function it(testName, callback) {
    try {
        callback();
        console.log(`  ✔ ${testName}`);
    }
    catch (error) {
        console.error(`  ✘ ${testName}`);
    }
}
function assertStrictEqual(actual, expected) {
    if (actual !== expected) {
        throw new Error(`AssertionError: Expected ${expected}, but got ${actual}`);
    }
}
describe("Math operations", () => {
    it("should add two numbers correctly", () => {
        assertStrictEqual(2 + 3, 5);
    });
    it("should subtract two numbers correctly", () => {
        assertStrictEqual(5 - 3, 2);
    });
});
describe("String operations", () => {
    it("should concatenate two strings correctly", () => {
        assertStrictEqual("hello" + " " + "world", "hello world");
    });
});
export {};
