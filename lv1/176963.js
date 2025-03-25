// 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수
// name : 그리워하는 사람의 이름을 담은 문자열 배열
// yearning : 각 사람별 그리움 점수를 담은 정수 배열
// photo : 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열
function solution(name, yearning, photo) {
  return photo.map((p) => {
    // 각 사진의 그림움 점수 연산을 위한 변수
    let cnt = 0;
    p.forEach((n) => {
      // indexOf 메서드를 이용해 name 배열에서의 인덱스를 index에 할당
      const index = name.indexOf(n);
      // name 배열에 이름이 없는 경우 -1을 리턴하기 때문에 0 이상인 경우만 점수 덧셈 연산
      cnt += index >= 0 ? yearning[index] : 0;
    });
    return cnt;
  });
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
); // [19, 15, 6]
console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
); // [67, 0, 55]
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
); // [5, 15, 0]
