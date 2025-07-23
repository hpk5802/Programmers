function solution(n) {
  let answer;
  let binary = n.toString(2);
  const cntOne = binary.split('').filter(a => a === '1').length;

  if (binary.indexOf('0') < 0) {
    answer = parseInt(`${binary[0]}0${binary.slice(1)}`, 2);
  } else {
    while (1) {
      n++;
      if (cntOne === n.toString(2).split('').filter(a => a === '1').length) {
        answer = n;
        break;
      }
    }
  }

  return answer;
}