function solution(s) {
    let removeCnt = 0;
    let convertCnt = 0;
        
    while (1) {
        if (s === '1') break;
        
        if (s.indexOf('0') >= 0) {
            const size = s.length;
            s = s.split('').filter(w => w !== '0').join('');
            removeCnt += size - s.length;
        }
        
        s = s.length.toString(2)
        convertCnt++;
    }
    
    return [convertCnt, removeCnt];
}