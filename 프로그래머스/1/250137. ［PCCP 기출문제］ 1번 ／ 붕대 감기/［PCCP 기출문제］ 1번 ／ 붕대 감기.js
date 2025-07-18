function solution(bandage, health, attacks) {
  const max = health;
  const size = attacks[attacks.length - 1][0];
  const attackMap = new Map(attacks);
  let cnt = 0;

  for (let i = 1; i <= size; i++) {
    const damage = attackMap.get(i);

    if (damage) {
      health -= damage;
      cnt = 0;
      if (health < 1) {
        health = -1;
        break;
      }
    } else {
      const h = health + bandage[1];
      health = h > max ? max : h;
      cnt++;
      if (cnt === bandage[0]) {
        const h = health + bandage[2];
        health = h > max ? max : h;
        cnt = 0;
      }
    }
  }

  return health;
}