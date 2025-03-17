// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return하는 함수
// numbers의 길이는 2 이상 100 이하
// numbers의 모든 수는 0 이상 100 이하
function solution(numbers) {
  // 중복을 제거하기 위해 Set 객체 사용
  const result = new Set();

  // numbers 배열을 순회
  for (let i = 0; i < numbers.length - 1; i++) {
    // numbers 배열을 i+1 부터 순회
    for (let j = i + 1; j < numbers.length; j++) {
      // 두 수의 합을 Set.add 메서드를 통해 result에 삽입
      result.add(numbers[i] + numbers[j]);
    }
  }

  // Set 객체의 values 값을 배열로 반환한 후 오름차순 정렬
  return Array.from(result.values()).sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]
