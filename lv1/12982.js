// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하는 함수
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수
function solution(d, budget) {
  let result = 0;
  // 부서를 금액 오름차순으로 정렬
  d.sort((a, b) => a - b);

  // 부서 순회
  for (let i = 0; i < d.length; i++) {
    // 예산 - 부서 신청 금액
    budget -= d[i];
    if (budget >= 0) {
      // 부서를 지원 가능한 경우 result++;
      result++;
    } else {
      // 부서를 지원 할 수 없는 경우 순회 종료
      break;
    }
  }

  return result;
}

console.log(solution([1, 3, 2, 5, 4], 9)); //3
console.log(solution([2, 2, 3, 3], 10)); // 4
