function solution(friends, gifts) {
  const hash = {};
  const hashCnt = {};
  const result = new Array(friends.length).fill(0);

  friends.forEach(friend => {
    hash[friend] = {};
    hashCnt[friend] = 0;
  })

  gifts.forEach(gift => {
    const [give, get] = gift.split(' ');
    hashCnt[give]++;
    hashCnt[get]--;
    if (!hash[give][get]) {
      hash[give][get] = 1;
      hash[get][give] = -1;
    }
    else {
      hash[give][get] += 1;
      hash[get][give] -= 1;
    }
    if (hash[give][get] === 0) {
      delete hash[give][get];
      delete hash[get][give];
    }
  })

  Object.entries(hash).forEach(([_, value], index) => {
    Object.entries(value).forEach(([_, val]) => {
      if (val > 0) result[index]++;
    })
  })

  Object.entries(hash).forEach(([key, value]) => {
    const filtered = friends.filter(friend => friend !== key && Object.keys(value).indexOf(friend) === -1);

    filtered.forEach(f => {
      if (hashCnt[key] > hashCnt[f]) {
        result[friends.indexOf(key)] += 0.5;
      } else if (hashCnt[f] > hashCnt[key]) {
        result[friends.indexOf(f)] += 0.5;
      }
    })
  })
  return Math.max(...result)
}