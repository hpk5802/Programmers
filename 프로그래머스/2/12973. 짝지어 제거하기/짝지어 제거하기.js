function solution(s) {
    const stack = [];
    
    s.split('').forEach(alp => {
        if (stack[stack.length-1] === alp) {
            stack.pop();
        } else {
            stack.push(alp);
        }
    })
    
    return stack.length === 0 ? 1 : 0;
}