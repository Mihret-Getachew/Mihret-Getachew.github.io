// You can write and run the timer code here via npm run app
function printNumber(start: number, end: number) {
  let counter = start;
  const timerId = setInterval(() => {
    console.log(counter++);
    if (counter > end) {
      clearInterval(timerId);
    }
    // Closures: timerId, counter;
  }, 1000);
}

// printNumber(3, 5);

function printNumberDelay(start: number, end: number) {
  console.log("Starting in 3 seconds");
  setTimeout(() => {
    printNumber(start, end);
    // Closures: timeOutId
  }, 3000);

  //clearTimeout(timeOutId);
}

printNumberDelay(3, 5);

//
