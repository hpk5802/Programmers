function solution(s) {
  const stack = [];

  s.split('').forEach(w => {
    if (stack[stack.length - 1] === '(' && w === ')') {
      stack.pop();
    } else {
      stack.push(w);
    }
  })

  return stack.length === 0;
}