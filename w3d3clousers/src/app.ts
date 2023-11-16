// write any code you want to test here and run with npm run app
// import {makeArmy } from '../test/clouserTests.js';

export function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    // Using a closure to capture the value of 'i'
    shooters[i] = function () {
      return i;
    };
  }

  return shooters;
}

const army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
