function solution(park, routes) {
  const index = park.join('').indexOf('S');
  const boundX = park[0].length;
  const boundY = park.length;
  let pos = [Math.floor(index / boundY), index % boundX];

  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  }

  routes.forEach(route => {
    const [dir, cnt] = route.split(' ');
    let canMove = true;
    let ry = pos[0];
    let rx = pos[1];

    for (let i = 0; i < Number(cnt); i++) {
      ry += directions[dir][0];
      rx += directions[dir][1];
      if (rx >= boundX || ry >= boundY || rx < 0 || ry < 0 || park[ry][rx] === 'X') {
        canMove = false;
        break;
      }
    }

    if (canMove) {
      pos = [ry, rx];
    }
  })

  return pos;
}