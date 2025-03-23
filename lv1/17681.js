function solution(n, arr1, arr2) {
  return arr1.map((num, index) => {
    // toString() 메서드의 radix 옵션을 이용해 2진수 문자열로 변환
    let decimal_1 = num.toString(2);
    let decimal_2 = arr2[index].toString(2);

    // 배열의 길이 n보다 문자열의 길이가 작은 경우
    // 길이가 n이 되도록 repeat() 메서드를 이용해 문자열 앞에 '0'을 추가
    if (decimal_1.length < n) {
      decimal_1 = "0".repeat(n - decimal_1.length) + decimal_1;
    }
    if (decimal_2.length < n) {
      decimal_2 = "0".repeat(n - decimal_2.length) + decimal_2;
    }

    return decimal_1
      .split("") // split() 메서드로 문자열의 각 문자를 요소로 갖는 배열로 분리
      .map((n, index) => (n + decimal_2[index] < 1 ? " " : "#")) // 문자 배열을 순회하며 둘 중 하나라도 1이면 #(벽) / 둘 다 0이면 " "(공백)인 새로운 배열 반환
      .join(""); // join() 메서드로 배열을 문자열로 합침
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // ["######", "### #", "## ##", " #### ", " #####", "### # "]
