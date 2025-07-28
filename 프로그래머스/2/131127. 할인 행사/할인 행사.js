function solution(want, number, discount) {
    if (want.filter(w => discount.includes(w)).length !== want.length) return 0;
    
    let answer = 0;
    const wantMap = [];

    want.forEach((w,index) => {
        for (let i=0; i<number[index]; i++) {
            wantMap.push(w);
        }
    })
    
    wantMap.sort();
    
    for (let i=0; i<=discount.length-10; i++) {
        let canBuy = true;
        const sliced = discount.slice(i,i+10).sort();
                
        for (let i=0; i<sliced.length; i++) {
            if (wantMap[i] !== sliced[i]) {
                canBuy = false;
                break;
            }
        }
        
        if (canBuy) answer++;
    }

    return answer;
}