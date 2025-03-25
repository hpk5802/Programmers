// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution
function solution(a, b) {
  // 요일 매핑을 위한 객체
  const dayMap = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
  };

  const YEAR = 2016;
  // Date 객체 생성 후 getDay() 메서드를 이용해 요일 정보를 day에 저장
  // month는 0 부터 시작하기 때문에 -1
  const day = new Date(YEAR, a - 1, b).getDay();

  return dayMap[day];
}

console.log(solution(5, 24)); // "TUE"
