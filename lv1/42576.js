// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
//  완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
function solution(participant, completion) {
  const user = new Map();

  [...participant, ...completion].forEach((person) => {
    if (user.has(person)) user.set(person, user.get(person) + 1);
    else user.set(person, 1);
  })

  const index = Array.from(user.values()).findIndex(val => val % 2 !== 0);

  return Array.from(user.keys())[index];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // "vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"