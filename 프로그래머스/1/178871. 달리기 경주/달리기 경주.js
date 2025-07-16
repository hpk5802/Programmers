function solution(players, callings) {
    const rank = new Map();
    
    players.forEach((player, index) => rank.set(player, index));
    
    callings.forEach(calling => {
        const index = rank.get(calling);
        const prev = players[index-1];
        
        [players[index-1], players[index]] = [players[index], players[index-1]];
        rank.set(calling, index-1);
        rank.set(prev, index);
    })
    return players;
}