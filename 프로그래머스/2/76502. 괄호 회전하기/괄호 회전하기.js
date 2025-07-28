function solution(s) {
    let answer = 0;
    
    for (let i=0; i<s.length; i++) {
        const stack = [];
        s = s.slice(1,) + s[0];
        
        s.split('').forEach((w,i) => {
            if (i === 0) {
                stack.push(w)
            } else {
                const prev = stack[stack.length-1];
                if (prev === '(' && w === ')') stack.pop();
                else if (prev === '{' && w === '}') stack.pop();
                else if (prev === '[' && w === ']') stack.pop();
                else stack.push(w);
            }            
        })
        
        if (stack.length === 0) answer++;
    }
    
    return answer;
}