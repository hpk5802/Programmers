const getGcd = (a, b) => {
    if (b === 0 ) return a;
    else return getGcd(b, a % b);
}

function solution(arr) {
    return arr.reduce((prev, acc) => (prev * acc) / getGcd(prev, acc))
}