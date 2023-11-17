/*Be sure to use meaningful variable names.
Try to use map and reduce in your functions as appropriate. */
//The following objects record the season statistics for players on a basketball team.
const player1 = {
    jersey: 8,
    stats: [
        { game: 1, points: 6 },
        { game: 2, points: 7 },
    ],
};
const player2 = {
    jersey: 12,
    stats: [
        { game: 1, points: 16 },
        { game: 2, points: 14 },
    ],
};
export const player3 = {
    jersey: 6,
    stats: [
        { game: 1, points: 10 },
        { game: 2, points: 6 },
    ],
};
export const teamStats = [player1, player2, player3];
export function findTotalPlayerPoints(player) {
    let result = player.stats.reduce((sum, { points }) => {
        return (sum += points);
    }, 0);
    return result;
}
export function findTotalPointsByJersey(jersey) {
    let player = teamStats.find((player) => {
        if (player.jersey == jersey) {
            return true;
        }
        return false;
    });
    let result = findTotalPlayerPoints(player);
    return result;
}
export function findTotalScores(teamStats) {
    let result = teamStats.map((player) => {
        return { jersey: player.jersey, total: findTotalPlayerPoints(player) };
    });
    return result;
}
