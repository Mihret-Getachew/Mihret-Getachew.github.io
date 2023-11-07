export interface StudentQuiz {
  id: number;
  quizAnswers: number[];
}

export interface StudentResult {
  id: number;
  score: number;
}

export const studentQuizzes: StudentQuiz[] = [];
export const CORRECT_ANSWERS: number[] = [1, 2, 3];
export function gradeStudent(
  studentAnswers: number[],
  correct: number[]
): number {
  let answers: number = 0;
  for (let i = 0; i < studentAnswers.length; i++) {
    if (studentAnswers[i] == correct[i]) {
      answers++;
    }
  }
  return answers;
}

export function gradeQuiz(
  studentsAnswers: StudentQuiz[],
  correct: number[]
): number[] {
  let result: number[] = [];

  for (let i = 0; i < studentsAnswers.length; i++) {
    const correctCount = gradeStudent(studentsAnswers[i].quizAnswers, correct);
    result.push(correctCount);
  }

  return result;
}
//IMPLEMENT THIS

export function gradeQuizLabeled(
  students: StudentQuiz[],
  correct: number[]
): StudentResult[] {
  const result: StudentResult[] = [];
  for (let i = 0; i < students.length; i++) {
    const correctCount = gradeStudent(students[i].quizAnswers, correct);
    const stuResult = {
      id: students[i].id,
      score: correctCount,
    };
    result.push(stuResult);
  }

  return result;
}
//IMPLEMENT THIS
