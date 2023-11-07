let commission = 0;

if (isSalaried === true) {
  if (amount < 300) {
    commission = 0;
  } else if (amount <= 500 && amount > 300) {
    commission = (amount * 1) / 100;
  } else {
    commission = (amount * 2) / 100;
  }
} else {
  if (amount > 300 && amount <= 500) {
    commission = (amount * 2) / 100;
  } else {
    commission = (amount * 3) / 100;
  }
}
