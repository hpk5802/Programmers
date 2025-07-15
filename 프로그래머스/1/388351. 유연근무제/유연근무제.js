function solution(schedules, timelogs, startday) {
  const answer = schedules.map((schedule, index) => {
    schedule += 10;
    const minute = schedule % 100 % 60;
    const hour = (Math.floor(schedule / 100) + Math.floor((schedule % 100) / 60)) * 100;
    const maximum = hour + minute;

    const filtered = timelogs[index].filter((_, idx) => (idx + startday + 1) % 7 > 1);
    return filtered.every(time => time <= maximum);
  })

  return answer.filter(a => a).length;
}