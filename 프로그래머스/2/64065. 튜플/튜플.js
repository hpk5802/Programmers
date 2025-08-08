function solution(s) {
    const answer = [];
    const formatted = s.slice(2,s.length-2).split('},{').sort((a,b) => a.length - b.length);
    
    formatted.forEach((f,i) => {
        if (i === 0) {
            answer.push(Number(f));
        } else {
            const arr = f.split(',').map(a => Number(a));
            
            answer.push(...arr.filter(a => answer.indexOf(a) < 0));
        }
    })
    
    return answer;
}