// 문자열 s이 주어질 때, s의 각 위치마다 자신보다 앞에 나왔으면서 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 확인하는 함수
function solution(s) {
  const stack = []; // 앞에 나왔던 글자를 저장할 스택
  const result = []; // 결과 배열

  s.split("").forEach((alp) => {
    let cnt = 0; // 몇 칸 앞에 있는지 할당할 변수
    let hasSame = false; // 같은 문자가 있는지 확인하기 위한 변수

    // 앞에 나왔던 글자 스택을 뒤에서부터 순회
    for (let i = stack.length - 1; i >= 0; i--) {
      cnt++;
      // 같은 글자가 있는 경우 hasSame 플래그를 true로 재할당하고 순회 종료
      if (stack[i] === alp) {
        hasSame = true;
        break;
      }
    }
    // 같은 글자가 있는 경우 result 배열에 cnt를, 없는 경우 -1을 push
    hasSame ? result.push(cnt) : result.push(-1);
    // 스택에 글자 추가
    stack.push(alp);
  });

  return result;
}

console.log(solution("banana")); // [-1,-1,-1,2,2,2]
console.log(solution("foobar")); // [-1,-1,1,-1,-1,-1]
