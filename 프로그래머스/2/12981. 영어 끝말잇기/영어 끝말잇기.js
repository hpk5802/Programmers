function solution(n, words) {
    let answer = [0,0];
    const stack = [words[0]];
    
    for (let i=1; i<words.length; i++) {
        const isFailed = stack[stack.length-1].slice(-1) !== words[i].slice(0,1);
        
        if (isFailed || stack.includes(words[i])) {
            answer = [i % n + 1, Math.floor(i / n) + 1];
            break;
        }
        
        stack.push(words[i]);
    }
    
    return answer;
}