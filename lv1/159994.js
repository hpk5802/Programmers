// cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    // 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
    // 위 조건을 만족하기 위해 cards1과 cards2의 0번 인덱스 값과 비교 연산
    // 문자열이 일치하면 해당 배열에서 0번 인덱스 요소를 삭제
    // 두 배열에서 일치하는 문자열이 없으면 'No'를 return하고 함수 종료
    if (goal[i] === cards1[0]) cards1.splice(0, 1);
    else if (goal[i] === cards2[0]) cards2.splice(0, 1);
    else return "No";
  }

  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "No"
