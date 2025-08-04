function solution(citations) {
    let res = 0;
    const max = Math.max(...citations);
    
    for (let i=0; i<=max; i++) {
        let arr = citations.filter(c => c >= i);
        
        if(arr.length >= i) res = i;
    }
    
    return res
}