function solution(clothes) {
  const map = new Map();

  clothes.forEach(c => {
    const [_, type] = c;

    if (map.has(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  })

  return Array.from(map.values()).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}