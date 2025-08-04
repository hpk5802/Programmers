function solution(k, dungeons) {
    const hash = new Array(dungeons.length).fill(0);
    let answer = 0;
    
    const dfs = (k, cnt) => {
        for(let i=0; i<dungeons.length; i++) {
            if (hash[i] < 1 && k >= dungeons[i][0]) {
                hash[i] = 1;
                dfs(k - dungeons[i][1], cnt+1);
                hash[i] = 0;
            }
        }
        answer = Math.max(answer, cnt);
        return answer
    }
    
    return dfs(k, 0);
}