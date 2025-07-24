function solution(n) {
    const calc = (n) => {
        const arr = [1,2];
        for(let i=2; i<=n;i++) {
            arr.push(arr[i-1] % 1234567 + arr[i-2] % 1234567);
        }
        
        return arr[n-1] % 1234567;
    }
    
    return calc(n);
}