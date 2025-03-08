// 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return하는 함수
// 금액이 부족하지 않으면 0 return
function solution(price, money, count) {
  let i = 1;
  // 요금
  let fee = 0;

  // count만큼 반복
  while (i <= count) {
    // i번 째 요금은 price * i배
    fee += price * i;
    i++;
  }

  // 부족한 금액 return, 부족하지 않으면 0 return
  return fee - money > 0 ? fee - money : 0;
}

console.log(solution(3, 20, 4)); // 10
