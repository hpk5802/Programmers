// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수
function solution(s) {
  return s
    .split(" ") // 단어 구분 : ' ' 기준으로 분리
    .map((word) =>
      word
        .split("")
        .map(
          (c, index) => (index % 2 === 0 ? c.toUpperCase() : c.toLowerCase()) // 단어의 짝수 인덱스는 대문자, 홀수 인덱스는 소문자 리턴
        )
        .join("")
    )
    .join(" ");
}

console.log(solution("try hello world")); // TrY HeLlO WoRlD
