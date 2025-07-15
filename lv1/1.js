// 배열 wallpaper가 매개변수로 주어질 때 바탕화면의 파일들을 한 번에 삭제하기 위해
// 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return하는 solution 함수
function solution(wallpaper) {
  const size = wallpaper[0].length;
  const flatted = wallpaper.join('');
  let startPoint = [wallpaper.length + 1, size + 1];
  let endPoint = [1, 1];

  flatted.split('').forEach((f, i) => {
    if (f === '#') {
      const row = Math.floor(i / size);
      const col = i % size;
      const [startRow, startCol] = startPoint;
      const [endRow, endCol] = endPoint;

      startPoint = [Math.min(row, startRow), Math.min(col, startCol)];
      endPoint = [Math.max(row + 1, endRow), Math.max(col + 1, endCol)];
    }
  })

  return [...startPoint, ...endPoint];
}

console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]
console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."])); // [1, 3, 5, 8]
console.log(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."])); // [0, 0, 7, 9]
console.log(solution(["..", "#."])); // [1, 0, 2, 1]