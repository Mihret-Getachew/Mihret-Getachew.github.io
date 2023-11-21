/* Write a program to compute student grades and the average score for the class. 
 Your program should have a quiz object that will contain properties of “students” and “key”. 
 The “students” property will be an array of student objects of the following form:

student10 = {sid: 10, answers: [{qid: 2, ans: “b”}, {qid: 3, ans: “a”}, {qid: 1, ans: “b”}] }
It has a property “sid” (student id) and another property “answers”. 
 The answer property holds an array that records the students answers for the quiz.  
 The array holds objects that have a question id (“qid”) property that uniquely identifies the 
 question, and an “ans” property that holds the student’s answer.

The ”key” property of the quiz will hold an array with objects that give the correct answers.

Create an object named quiz with the following methods
•	getAverage(), computes the average score over all students,
•	scoreStudent(sid), computes the quiz score for this student

The answer arrays might not have the questions in the same order. 
 Write a function, answerComparator, that you can use to sort the answer arrays by the quiz id, “qid”.   
 You may assume that there will be answer objects for every 
 question so that once they are sorted they arrays will have the student answers and the corresponding key answer in the same position of each array.  
 Score 1 point for each answer that matches the key.
*/

type Student = {
  sid: number;
  answers: Answer[];
};

type Answer = {
  qid: number;
  ans: string;
};

type Quiz = {
  students: Student[];
  key: Answer[];
  scoreStudent: (sid: number) => number;
  getAverage: () => number;
};
export const quiz: Quiz = {} as Quiz;
quiz.students = [
  {
    sid: 10,
    answers: [
      { qid: 2, ans: "b" },
      { qid: 3, ans: "a" },
      { qid: 1, ans: "b" },
    ],
  },
  {
    sid: 11,
    answers: [
      { qid: 2, ans: "a" },
      { qid: 1, ans: "e" },
      { qid: 3, ans: "b" },
    ],
  },
  {
    sid: 12,
    answers: [
      { qid: 3, ans: "b" },
      { qid: 2, ans: "a" },
      { qid: 1, ans: "d" },
    ],
  },
];
quiz.key = [
  { qid: 1, ans: "b" },
  { qid: 2, ans: "a" },
  { qid: 3, ans: "b" },
];

/**
 *
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object
 * @returns {number} difference of the identifiers
 */
function answerComparator(ans1: Answer, ans2: Answer): number {
  return ans1.qid - ans2.qid;
}

/**
 *
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (stuId: number): number {
  //IMPLEMENT THIS
  const student: Student | undefined = this.students.find(({ sid }) => {
    if (sid == stuId) {
      return true;
    } else {
      return false;
    }
  });

  let count = 0;
  if (student) {
    student.answers.sort(answerComparator);
    this.key.sort(answerComparator);

    for (let index = 0; index < student.answers.length; index++) {
      if (this.key[index].ans == student.answers[index].ans) count++;
    }
  }

  /**
   * Method 2 - No Sort
   */
  //   if (student) {
  //     for (const { qid, ans } of student.answers) {
  //       const correctAnswer: Answer | undefined = this.key.find((quizKey) => {
  //         if (quizKey.qid == qid) return true;

  //         return false;
  //       });

  //       if (correctAnswer) {
  //         const { ans: correctAns } = correctAnswer;

  //         if (correctAns == ans) count++;
  //       }
  //     }
  //   }

  return count;
};

/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function (): number {
  //IMPLEMENT THIS coreStudent(student.sid);
  //   }

  //   return sum / this.students.length;

  return (
    this.students.reduce((sum, student) => {
      return (sum += this.scoreStudent(student.sid));
    }, 0) / this.students.length
  );
};
