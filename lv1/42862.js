// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수
function solution(n, lost, reserve) {
  const map = new Map();

  for (let i = 1; i <= n; i++) {
    map.set(i, 1);
    if (reserve.includes(i)) map.set(i, map.get(i) + 1)
    if (lost.includes(i)) map.set(i, map.get(i) - 1);
  }

  for (let [key, value] of map) {
    if (value > 1) {
      if (map.get(key - 1) === 0) {
        map.set(key - 1, 1);
        map.set(key, 1);
      } else if (map.get(key + 1) === 0) {
        map.set(key + 1, 1);
        map.set(key, 1);
      }
    }
  }
  return Array.from(map.values()).filter(value => value > 0).length
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4,], [3])); // 4
console.log(solution(3, [3], [1])); // 2