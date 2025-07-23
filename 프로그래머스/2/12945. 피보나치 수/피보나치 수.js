function fibonacci(n) {
    const stack = [0,1];
    
    for (let i=2; i<n; i++) {
        const pprev = stack[stack.length-2];
        const prev = stack[stack.length-1]
        stack.push(pprev % 1234567 + prev % 1234567);
    }
    
    return stack[stack.length-1] + stack[stack.length-2];
}

function solution(n) {
    return fibonacci(n) % 1234567;
}