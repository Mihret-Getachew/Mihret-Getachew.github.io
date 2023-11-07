import { isVowel } from "../src/vowel.js";
// import { assert } from "chai";
import { computeSalesCommission } from "../src/commision.js";
import { calcuateInterest } from "../src/interest.js";
import { calcDownpayment } from "../src/costhouse.js";
import { SUM } from "../src/sumdigit.js";
import { MULTI } from "../src/multidigit.js";
import { convertFahrenheit } from "../src/tempreture.js";
import { calculateDistance } from "../src/distance.js";
describe("isVowel", function () {
  it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
  });
  it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
  });
  it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
  });
  it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
  });
  it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
  });
});
describe("test of ComputSalesCommission", function () {
  it("tests salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 200), 0);
  });
  it("tests not salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 200), 0);
  });
  it("tests salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 300), 3);
  });
  it("tests not salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 300), 6);
  });
  it("tests salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
  });
  it("tests not salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
  });
});
describe("calculateInterest", function () {
  it("tests $100 for 1 year at 10% monthly compound", function () {
    const exact = calcuateInterest(100, 10, 1);
    assert.strictEqual(+exact.toFixed(2), 110.47);
  });
});
describe("calcDownpayment", function () {
  it("down payment 0 expect 0", function () {
    const result = calcDownpayment(0);
    assert.strictEqual(result, 0);
  });
  it("down payment 10000 expect 500", function () {
    const result = calcDownpayment(10000);
    assert.strictEqual(result, 500);
  });
  it("down payment 70000 expect 3000", function () {
    const result = calcDownpayment(70000);
    assert.strictEqual(result, 3000);
  });
  it("down payment 250000 expect 1000", function () {
    const result = calcDownpayment(250000);
    assert.strictEqual(result, 10000);
  });
  it("down payment -300 expect 0", function () {
    const result = calcDownpayment(-300);
    assert.strictEqual(result, 0);
  });
});
describe("SUM", function () {
  it("add 1234 get 10", function () {
    const result = SUM(1234);
    assert.strictEqual(result, 10);
  });
  it("add 102 get 3", function () {
    const result = SUM(102);
    assert.strictEqual(result, 3);
  });
  it("add 8 get 8", function () {
    const result = SUM(8);
    assert.strictEqual(result, 8);
  });
  it("add 0 get 0", function () {
    const result = SUM(0);
    assert.strictEqual(result, 0);
  });
});
describe("MULTI", function () {
  it("multiply 1234 get 24", function () {
    const result = MULTI(1234);
    assert.strictEqual(result, 24);
  });
  it("multiply 120 get 0", function () {
    const result = MULTI(120);
    assert.strictEqual(result, 0);
  });
  it("multiply 123 get 6 ", function () {
    const result = MULTI(123);
    assert.strictEqual(result, 6);
  });
});
describe("convertFahrenheit", function () {
  it("for 32 fahraniet get 0 celcius", function () {
    const result = convertFahrenheit(32);
    assert.strictEqual(result, 0);
  });
  it("for 0 fahraniet get -17.7778", function () {
    const result = convertFahrenheit(0);
    assert.strictEqual(+result.toFixed(2), -17.78);
  });
});
describe("calculateDistance", function () {
  it("get 0,0,5,5 result 7.07", function () {
    const result = calculateDistance(0, 0, 5, 5);
    assert.strictEqual(+result.toFixed(2), 7.07);
  });
  it("get 0,0,5,5 result 7.07", function () {
    const result = calculateDistance(0, 0, -5, -5);
    assert.strictEqual(+result.toFixed(2), 7.07);
  });
});
