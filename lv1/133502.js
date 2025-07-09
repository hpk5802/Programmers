// 상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때, 상수가 포장하는 햄버거의 개수를 return 하도록 solution 함수
function solution(ingredient) {
  let answer = 0;
  const stack = [];

  ingredient.map(i => {
    stack.push(i)
    if (stack.length >= 4 && stack.slice(-4).join('') === '1231') {
      stack.splice(-4);
      answer++;
    }
  })

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0