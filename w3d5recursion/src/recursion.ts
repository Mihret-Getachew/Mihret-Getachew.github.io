export {
  sumTo,
  factorial,
  fibonacci,
  outputList,
  outputListLoop,
  //   reverseList,
  //   reverseListLoop,
  TreeNode,
  //   sumTreeValues,
};

function factorial(n: number): number {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

function sumTo(num: number): number {
  if (num == 1) return 1;

  return num + sumTo(num - 1);
}

function fibonacci(num: number): number {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function outputList(obj: any): string {
  if (obj == null) return "printed to console";

  return obj.value + "" + outputList(obj.next);
}

function outputListLoop(obj: any) {
  let res = "";

  while (obj != null) {
    let { next, value } = obj;
    res += value;

    obj = next;
  }

  res += "printed to console";
  return res;
}
type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};
