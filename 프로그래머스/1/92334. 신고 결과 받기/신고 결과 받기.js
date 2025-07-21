function solution(id_list, report, k) {
  const answer = Array.from({ length: id_list.length }, () => 0);
  const count = Array.from({ length: id_list.length }, () => k);
  const map = new Map();

  id_list.forEach((id) => map.set(id, []));

  report.forEach((r) => {
    const [reporter, reported] = r.split(' ');
    let recentReporter;

    if (!map.get(reported).includes(reporter)) {
      count[id_list.indexOf(reported)] -= 1;
      map.set(reported, [...map.get(reported), reporter]);
    }

    map.set(reported, [...map.get(reported)], recentReporter);
  })

  count.forEach((c, i) => {
    if (c < 1) {
      map.get(id_list[i]).forEach((g) => {
        answer[id_list.indexOf(g)]++;
      })
    }
  })

  return answer;
}