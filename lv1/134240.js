// 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return하는 함수
// food[i]는 i번 음식의 수입니다.
// food[0]은 물의 양이며, 항상 1입니다.
function solution(food) {
  let result = ""; // 음식 배치 문자열
  // food 배열을 순회 -> 0번 인덱스(물)는 1로 고정이기 때문에 제외
  for (let i = 1; i < food.length; i++) {
    // i번 음식의 양 => 인원수가 2명이기 때문에 ÷ 2
    const amount = Math.floor(food[i] / 2);
    // repeat() 메서드를 이용해 음식 양만큼 result 문자열에 i번 음식 추가
    result += String(i).repeat(amount);
  }

  // concat() 메서드를 이용해 중앙에 물('0') 추가
  // split(), reverse(), join() 메서드를 이용해 문자열 result를 역순 문자열로 변환
  // concat() 메서드를 이용해 물('0') 뒤에 역순 문자열 추가
  return result.concat("0").concat(result.split("").reverse().join(""));
}

console.log(solution([1, 3, 4, 6])); // "1223330333221"
console.log(solution([1, 7, 1, 2])); // "111303111"
