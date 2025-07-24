function solution(brown, yellow) {
    let answer;
    const size = brown+yellow;
    
    for (let i=brown+yellow; i>0; i--) {
        if (size % i === 0 && (i - 2) * (size / i - 2) === yellow) {
            answer = [i, size / i];
            break;
        }
    }
    
    return answer;
}