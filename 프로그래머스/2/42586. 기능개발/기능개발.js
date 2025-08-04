function solution(progresses, speeds) {
    const answer = [];
    let stack = [];
    const due = progresses.map((p,i) => Math.ceil((100 - p) / speeds[i]));
    
    due.forEach(d => {
        if (stack.length === 0 || stack[0] >= d) {
            stack.push(d);
        }  else {
            answer.push(stack.length);
            stack = [d]
        }
    })
    
    return [...answer, stack.length];
}