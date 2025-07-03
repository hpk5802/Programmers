// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 
// 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
function isPrime(num) {
    if (Math.sqrt(num) % 1 === 0) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true;
}

function solution(nums) {
    let result = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];

                result += isPrime(sum) ? 1 : 0;
            }
        }
    }

    return result;
}

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4