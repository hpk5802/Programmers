// 정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때
// 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수
function solution(n, m, section) {
  let cnt = 1; // 페인트 횟수
  let startPoint = 0; // 페인트 시작점

  section.forEach((areaIndex) => {
    if (startPoint < 1) {
      startPoint = areaIndex;
    }

    // 롤러 길이보다 칠하는 영역이 긴 경우
    if (areaIndex - startPoint >= m) {
      // 페인트 시작점을 새로 설정하고, 페인트 횟수 증가
      startPoint = areaIndex;
      cnt++;
    }
  });

  return cnt;
}

console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4
