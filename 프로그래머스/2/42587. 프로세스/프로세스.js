function solution(priorities, location) {
    let entries = priorities.map((p,i) => [p,i]);
    const stack = [];
    
    while (entries.length > 0) {
        const max = Math.max(...entries.map(e => e[0]));
        const pos = entries.findIndex((e) => e[0] === max);
        
        entries = [...entries.slice(pos), ...entries.slice(0,pos)];        
        stack.push(entries.shift());
    }
    
    return stack.findIndex(s => s[1] === location) + 1;    
}