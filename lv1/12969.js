// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력하는 함수
// n, m ≤ 1000
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  // 구조분해 할당으로 n, m 추출
  const [n, m] = data.split(" ");
  for (let i = 0; i < m; i++) {
    console.log("*".repeat(n));
  }
});
