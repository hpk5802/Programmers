function solution(k, tangerine) {
    let answer = 0;
    const map = new Map();
    
    tangerine.forEach(t => {
        if (map.get(t)) {
            map.set(t, map.get(t)+1);
        } else {
            map.set(t,1);
        }
    })
    
    const sorted = Array.from(map.values()).sort((a,b) => b - a);
    
    for (let i=0; i<sorted.length; i++) {
        k -= sorted[i];
        answer++;
        if (k <= 0) break;
    }
    
    return answer;
}