// 1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap과 입력하려는 문자열들이 담긴 문자열 배열 targets가 주어질 때,
// 각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return 하는 solution 함수
function solution(keymap, targets) {
  const result = Array.from({ length: targets.length }, () => 0);

  targets.forEach((target, index) => {
    for (let i = 0; i < target.length; i++) {
      const arrPos = [];

      for (let j = 0; j < keymap.length; j++) {
        arrPos.push(keymap[j].indexOf(target[i]))
      }

      const filtered = arrPos.filter(pos => pos !== -1);

      if (filtered.length === 0) {
        result[index] = -1;
        break;
      }
      result[index] += (Math.min(...filtered) + 1);
    }
  })

  return result;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9,4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4,6]