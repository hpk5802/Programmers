// 빈병 n개로 받을 수 있는 콜라의 병 수를 return하는 함수
// a : 콜라를 받기 위해 마트에 주어야 하는 병 수
// b : 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
function solution(a, b, n) {
  let result = 0;
  // 콜라를 받을 수 있을때까지 반복
  while (n >= a) {
    result += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return result;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
