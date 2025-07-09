// 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수
function solution(x, y) {
  let answer = "";
  const map = new Map();
  x.split("").map((n) => {
    if (map.has(n)) map.set(n, map.get(n) + 1);
    else map.set(n, 1);
  });
  y.split("")
    .sort((a, b) => b - a)
    .map((n) => {
      if (map.has(n) && map.get(n) > 0) {
        map.set(n, map.get(n) - 1);
        answer += n;
      }
    });
  if (!answer) {
    return "-1";
  } else if (answer.replaceAll("0", "") === "") {
    return "0";
  } else {
    return answer;
  }
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
