// 질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어집니다.
// 이때, 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수
function solution(survey, choices) {
  let result = "";
  const table = {
    RT: 0,
    CF: 0,
    JM: 0,
    AN: 0,
  };

  survey.forEach((s, i) => {
    const sorted = s.split("").sort().join("");
    const score = s === sorted ? choices[i] - 4 : -(choices[i] - 4);

    table[sorted] += score;
  });

  for (let key in table) {
    result = table[key] > 0 ? result + key[1] : result + key[0];
  }

  return result;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // "RCJA"
