// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution
function solution(n) {
  // 크기가 n(1~n)인 true인 배열
  const arr = new Array(n - 1).fill(true);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // 배열의 요소가 true인 경우(소수)
    if (arr[i - 2]) {
      // 배수를 찾아 false (소수 x)로 변경
      for (let j = i * i; j <= n; j += i) {
        arr[j - 2] = false;
      }
    }
  }

  // reduce() 메서드로 소수의 개수를 반환
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
