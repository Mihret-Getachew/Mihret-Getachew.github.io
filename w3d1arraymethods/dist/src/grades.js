export const quiz = {};
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
            { qid: 1, ans: "e" },
            { qid: 2, ans: "a" },
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
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object
 * @returns {number} difference of the identifiers
 */
function answerComparator(ans1, ans2) {
    return ans1.qid - ans2.qid;
}
/**
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid) {
    const student = quiz.students.find((s) => s.sid === sid);
    if (!student)
        return 0;
    const sortedStudentAnswers = student.answers.slice().sort(answerComparator);
    let score = 0;
    for (let i = 0; i < quiz.key.length; i++) {
        if (sortedStudentAnswers[i] &&
            quiz.key[i] &&
            sortedStudentAnswers[i].ans === quiz.key[i].ans) {
            score++;
        }
    }
    return score;
};
/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function () {
    const totalScores = quiz.students.reduce((sum, student) => sum + quiz.scoreStudent(student.sid), 0);
    return totalScores / quiz.students.length;
};
