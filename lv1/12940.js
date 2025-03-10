// 최대공약수 : greatest common divisor -> gcd
function getGcd(a, b) {
  return b > 0 ? getGcd(b, a % b) : a;
}

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수
// return : [최대공약수, 최소공배수]
function solution(n, m) {
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  const gcd = getGcd(max, min);
  // 최소공배수 : least common multiple -> lcm
  const lcm = (max * min) / gcd;

  return [gcd, lcm];
}

console.log(solution(3, 12)); // [3,12]
console.log(solution(2, 5)); // [1, 10]
