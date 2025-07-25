function solution(n,a,b) {
    let res = 1
    
    while(1) {
        if(a < b) {
            if(a % 2 === 1 && b - a === 1) {
                break;
            } else {
                a = Math.ceil(a / 2);
                b = Math.ceil(b / 2);
            }
        } else {
            if(b % 2 === 1 && a - b === 1) {
                break;
            } else {
                a = Math.ceil(a / 2);
                b = Math.ceil(b / 2);
            }
        }
        res++;
    }
    return res;
}