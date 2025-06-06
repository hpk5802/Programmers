// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 return하는 함수
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

console.log(solution(["Jane", "Kim"])); // '김서방은 1에 있다'
