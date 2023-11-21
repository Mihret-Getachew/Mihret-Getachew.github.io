export function describe(testGroup: string, callback: () => void): void {
  console.log(`\Test Name: ${testGroup}`);
  callback();
}

export function it(testName: string, callback: () => void): void {
  try {
    callback();
    console.log(`  ✔ ${testName}`);
  } catch (error) {
    console.error(`  ✘ ${testName}`);
  }
}

export function assertStrictEqual(result: any, expected: any): void {
  if (result !== expected) {
    throw new Error(`AssertionError: Expected ${expected}, but got ${result}`);
  }
}
