// 신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수
function solution(new_id) {
  const step1 = new_id.toLowerCase();
  const step2 = step1.match(/[a-z0-9\-\_\.]/g).join('');
  const step3 = step2.replace(/\.{2,}/g, '.');
  const step4 = step3.replace(/(^\.)|(\.$)/g, '');
  const step5 = step4 === '' ? 'a' : step4;
  const step6 = step5.length > 15 ? step5.slice(0, 15).replace(/\.$/, '') : step5.replace(/\.$/, '');
  const step7 = step6.length < 3 ? step6 + step6.slice(-1).repeat(3 - step6.length) : step6;

  return step7;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm")); // 	"bat.y.abcdefghi"
console.log(solution("z-+.^.")); // "z--"
console.log(solution("=.=")); // "aaa"
console.log(solution("123_.def")); // "123_.def"
console.log(solution("abcdefghijklmn.p")); // 	"abcdefghijklmn"