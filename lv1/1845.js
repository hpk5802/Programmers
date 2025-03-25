// N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중,
// 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수
// nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수
// 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수
// 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return
function solution(nums) {
  // 배열에서 중복을 제거하기 위해 Set 객체 생성
  const pokemon = new Set(nums);
  const cntPokemonKind = Array.from(pokemon.values()).length;

  // 포켓몬 종류의 개수와 선택할 수 있는 최대 수(N/2) 중 작은 값을 반환
  // 포켓몬 종류가 선택할 수 있는 최대 수(N/2) 보다 큰 경우 고려
  return Math.min(cntPokemonKind, nums.length / 2);
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
