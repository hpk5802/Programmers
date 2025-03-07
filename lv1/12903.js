// 단어 s의 가운데 글자를 return하는 함수
// 단어의 길이가 짝수라면 가운데 두 글자를 return
function solution(s) {
  if (s.length % 2 !== 0) {
    // 홀수 : 가운데 글자 return
    return s[Math.floor(s.length / 2)];
  } else {
    // 짝수 : 가운데 두 글자 return
    const index = Math.floor(s.length / 2 - 1);
    // slice 메서드로 새로운 문자열 반환
    // end param은 본인 포함 x -> index+2하면 index+1까지 포함한 문자열 반환
    return s.slice(index, index + 2);
  }
}

console.log(solution("abcde")); // c
console.log(solution("qwer")); // we
