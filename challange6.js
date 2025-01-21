function voteWinner(votes) {
  if (!votes.length) return "There is not vote yet";

  const voteCount = votes.reduce((count, vote) => {
    count[vote] = (count[vote] || 0) + 1;
    return count;
  }, {});

  const maxVotes = Math.max(...Object.values(voteCount));
  const winners = Object.keys(voteCount).filter(
    (v) => voteCount[v] === maxVotes
  );

  return winners.length === 1
    ? `${winners[0]} is the winner`
    : `${winners.join(" and ")} are both winners`;
}

console.log(voteWinner(["A", "B", "A", "C", "A"]));
console.log(voteWinner(["A", "B", "B", "C", "A"]));
console.log(voteWinner([]));
