// 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수
// number : 기사단원의 수
// limit : 공격력 제한 수치
// power: 기사가 사용할 무기 공격력
function solution(number, limit, power) {
  // 기사단 수가 1인 경우 약수는 1
  if (number === 1) return 1;

  let result = [];
  // 1은 약수가 1개이므로 2부터 순회
  for (let i = 2; i <= number; i++) {
    // 제곱수인 경우 cnt 1로 시작 (약수의 대칭성 고려)
    let cnt = Math.sqrt(i) % 1 === 0 ? 1 : 0;
    // 약수의 대칭성 고려해 제곱 수 전까지만 순회
    for (let j = 1; j < Math.sqrt(i); j++) {
      if (i % j === 0) cnt += 2; // 약수인 경우 +2
      // 약수의 수가 limit을 넘어가는 경우 power로 제한
      if (cnt > limit) {
        cnt = power;
        break;
      }
    }
    result.push(cnt);
  }
  // reduce() 메서드를 이용해 무게를 더함
  // 2부터 순회했기 때문에 초기 값을 1로 설정
  return result.reduce((acc, num) => acc + num, 1);
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
