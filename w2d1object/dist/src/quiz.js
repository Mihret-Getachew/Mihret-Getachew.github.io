export const studentQuizzes = [];
export const CORRECT_ANSWERS = [1, 2, 3];
export function gradeStudent(studentAnswers, correct) {
    let answers = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] == correct[i]) {
            answers++;
        }
    }
    return answers;
}
export function gradeQuiz(studentsAnswers, correct) {
    let result = [];
    for (let i = 0; i < studentsAnswers.length; i++) {
        const correctCount = gradeStudent(studentsAnswers[i].quizAnswers, correct);
        result.push(correctCount);
    }
    return result;
}
//IMPLEMENT THIS
export function gradeQuizLabeled(students, correct) {
    const result = [];
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
