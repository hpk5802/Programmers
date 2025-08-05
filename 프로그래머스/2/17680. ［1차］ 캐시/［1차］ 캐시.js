function solution(cacheSize, cities) {
    let answer = 0;
    const stack = [];
    
    if (cacheSize === 0) return cities.length * 5;
    
    cities.forEach(c => {
        const lower = c.toLowerCase();
        
        if (stack.includes(lower)) {
            const index = stack.indexOf(lower);

            stack.splice(index,1);
            stack.push(lower);
            answer += 1;
        } else if (stack.length < cacheSize) {
            stack.push(lower);               
            answer += 5;
        } else {
            const least = stack.shift();
            
            if (least.toLowerCase() === lower) {
                answer += 1;
            } else {
                answer += 5;
            }
            stack.push(lower);
        }
    })
    
    return answer;
}