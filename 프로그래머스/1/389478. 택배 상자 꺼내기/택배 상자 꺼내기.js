function solution(n, w, num) {
  const arr = Array.from({ length: w }, () => []);

  for (let i = 0; i < n; i++) {
    if (Math.floor(i / w) % 2 === 0) {
      arr[i % w].push(i + 1);
    } else {
      arr[w - (i % w) - 1].push(i + 1);
    }
  }

  const filtered = arr.filter(a => a.includes(num))[0];

  console.log(arr, filtered, filtered.length, filtered.indexOf(num))

  return filtered.length - filtered.indexOf(num);
}