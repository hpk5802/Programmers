function solution(elements) {
    const res = new Map();
    const leng = elements.length;
    elements = [...elements, ...elements];
    
    for(let i=1; i<=leng; i++) {
        for(let j=0;j<leng; j++) {
            let sum = 0;
            let cnt = 0;
            
            while(1) {
                if(cnt === i) {
                    if(!res.has(sum)) {
                        res.set(sum,1);
                    }
                    break;
                } else {
                    sum += elements[j+cnt];
                    cnt++;
                }
            }
        }
    }
    return res.size;
}