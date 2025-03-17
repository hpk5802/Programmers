// 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return하는 함수
function solution(s) {
  // 문자와 숫자를 바꾸기 위해 매핑한 객체
  const NUMBERS = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  // 숫자를 return하기 때문에 Number() 메서드로 형변환
  return Number(
    // reduce() 메서드를 이용해, NUMBERS의 key 배열을 순회하며 문자열 변환을 누적 연산
    Object.keys(NUMBERS).reduce((acc, key) => {
      // NUMBERS의 key에 해당하는 문자 정규식 생성
      const regExp = new RegExp(key, "gi");
      // key에 대응하는 문자를 매핑되는 숫자로 변환
      return acc.replace(regExp, NUMBERS[key]);
    }, s) // 원본 문자열 s를 초기값으로 사용
  );
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 	123
