function solution(maps) {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    
    const isValid = (x, y) => x >= 0 && y >= 0 && x < maps[0].length && y < maps.length && maps[y][x] === 1;

    const queue = [[0, 0, 1]];
    maps[0][0] = 0;

    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();

        if (x === maps[0].length - 1 && y === maps.length - 1) {
            return distance;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (isValid(nx, ny)) {
                queue.push([nx, ny, distance + 1]);
                maps[ny][nx] = 0;
            }
        }
    }

    return -1;
}