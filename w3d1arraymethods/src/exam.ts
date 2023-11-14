export function replaceEnds(
  arr: number[],
  num1: number,
  num2: number,
  num3: number,
  num4: number
): number[] {
  let result = arr.slice();
  result.splice(0, 2, num1, num2);
  result.splice(arr.length - 2, 2, num3, num4);

  return result;
}
type Person = {
  firstName: string;
  lastName: string;
};
export function firstLast(names: string[]): Person[] {
  let newArr = [];
  for (let name of names) {
    const result = name.split(" ");
    newArr.push({ firstName: result[0], lastName: result[1] });
  }
  return newArr;
}

export function higho(func: (num: number) => number, nums: number[]): number[] {
  const result = nums.map(func);
  return result;
}
export function square(num1: number) {
  return num1 * num1;
}
export function absVal(num1: number) {
  if (num1 < 0) {
    num1 = num1 * -1;
  }
  return num1;
}

type Session = {
  userId: number;
  duration: number;
};
type Day = {
  sessions: Session[];
  date: string;
};
export function calculateDailyTotalDuration(sessions: Session[]): number {
  let result = 0;
  for (const session of sessions) {
    result += session.duration;
  }
  return result;
}
export function calculateTotalDuration(dailyRecord: Day[]): number {
  let result = 0;
  for (let days of dailyRecord) {
    for (const sessions of days.sessions) {
      result += sessions.duration;
    }
  }
  return result;
}
export function getAllSessions(dailyRecord: Day[]): Session[] {
  let newArr: Session[] = [];
  for (const days of dailyRecord) {
    newArr = newArr.concat(days.sessions);
  }
  return newArr;
}
export function getAllSessionsForUser(
  dailyRecord: Day[],
  id: number
): Session[] {
  let newArr: Session[] = [];
  for (const days of dailyRecord) {
    const result = days.sessions.filter((sessions) => {
      if (sessions.userId === id) {
        return true;
      }
      return false;
    });
    newArr = newArr.concat(result);
  }
  return newArr;
}
export function getAllDurations(dailyRecord: Day[]): number[] {
  let result: number[] = [];
  for (const days of dailyRecord) {
    const res = days.sessions.map((session) => {
      return session.duration;
    });
    result = result.concat(res);
  }
  return result;
}
