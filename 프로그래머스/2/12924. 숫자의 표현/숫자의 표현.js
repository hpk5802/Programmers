function solution(n) {
    let answer = 1;
    let i = 1;
    
    while (i < n) {
        let sum=i;        
        for (let j=i+1; j<=n; j++) {
            sum+=j;
            
            if (sum > n) {
                break;
            } else if (sum === n) {
                answer++;
                break;
            }
        }
        i++;
    }
    
    return answer;
}