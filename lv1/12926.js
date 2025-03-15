// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수
function solution(s, n) {
  return s
    .split("") // split 메서드로 문자열을 문자 단위 배열로 나눔
    .map((c) => {
      if (c !== " ") {
        // 공백이 아닌 경우
        let code = c.charCodeAt(); // 문자의 ASCII 코드 값을 code에 할당
        if (code <= 90) code = code + n <= 90 ? code + n : code + n - 26;
        // A-Z 범위를 벗어나면 -26(알파벳 수)
        else code = code + n <= 122 ? code + n : code + n - 26; // a-z 범위를 벗어나면 -26(알파벳 수)

        return String.fromCharCode(code); // 문자로 변환한 code를 반환
      }

      return c; // 공백은 ' ' 그대로 반환
    })
    .join(""); // join 메서드로 변환된 문자 배열을 문자열로 합침
}

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"
