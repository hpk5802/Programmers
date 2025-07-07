// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수
function solution(dartResult) {
  let formated = dartResult.match(/(10|[0-9])[SDT]|\*|#/g).map((val) => {
    if (val.includes('S') || val.includes('D') || val.includes('T')) {
      const score = val.slice(0, -1);
      const operator = val[val.length - 1];

      if (operator === 'S') {
        val = Number(score);
      } else if (operator === 'D') {
        val = Number(score) ** 2;
      } else {
        val = Number(score) ** 3;
      }
    }

    return val
  })

  formated.forEach((val, index) => {
    if (val === '#') {
      formated[index - 1] *= -1;
      formated[index] = '';
    }
    return val;
  })

  const stack = [];

  formated.forEach((val) => {
    if (typeof stack[stack.length - 1] === 'number' && typeof val === 'number') {
      stack.push('');
    }
    stack.push(val);
  })

  const values = stack.filter((_, i) => i % 2 === 0);
  const operators = stack.filter((_, i) => i % 2 !== 0);

  operators.forEach((o, i) => {
    if (o === '*') {
      values[i] *= 2;
      values[i - 1] *= 2;
    }
  })

  return values.reduce((acc, cur) => acc + cur);
}

console.log(solution('1S2D*3T')) // 37
console.log(solution('1D2S#10S')) // 9
console.log(solution('1D2S0T')) // 3
console.log(solution('1S*2T*3S')) // 23
console.log(solution('1D#2S*3S')) // 5
console.log(solution('1T2D3D#')) // -4
console.log(solution('1D2S3T*')) // 59