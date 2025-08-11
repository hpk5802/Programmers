function solution(topping) {
    let answer = 0;
    const older = new Map();
    const younger = new Map();
    topping.forEach(t => older.set(t, older.get(t) ? older.get(t)+1 : 1));
    
    for(let t of topping) {
        older.get(t) > 1 ? older.set(t, older.get(t)-1) : older.delete(t) ;
        younger.set(t, younger.get(t) ? younger.get(t)+1 : 1);
        
        if (older.size === younger.size) answer++;
        if (older.size < younger.size) break;
    }
    
    return answer;
}