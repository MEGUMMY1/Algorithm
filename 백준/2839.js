const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

// 풀이
function solution(n) {
  let answer = 0;
  let sugar = n;	// 배달해야 할 설탕의 양
  
  while(sugar > 0) {
    if(sugar % 5 === 0) {	
      sugar -= 5;
    } else {
      sugar -= 3;
    }
    answer++;
  }

  return sugar === 0 ? answer : -1;	// 설탕의 양이 3과 5로 나누어 떨어지지 않으면 -1
}

console.log(solution(input[0]));
