function solution(s) {
    return s.toLowerCase().split(' ').map(w => {
        if (w !== '') {
            return w[0].toUpperCase() + w.slice(1);
        }
    }).join(' ');
}