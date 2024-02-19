/*
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

고른 수열은 오름차순이어야 한다.
*/
const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split(' ');
const n = parseInt(input[0]);
const m = parseInt (input[1]);

// 풀이
function solution(n, m) {
  let temp = [];
  let answer = "";

  function dfs(idx, start) {	// start 지정
    if (idx === m) {
        const arr = [];
        for (let i = 0; i < m; i++) {
            arr.push(temp[i]);
        }
        answer += `${arr.join(' ')}\n`;
        return;
    }
    for (let i = start; i <= n; i++) {
        temp[idx] = i;
        dfs(idx + 1, i + 1);
    }
  }

  dfs(0, 1); 

  return answer;
}

console.log(solution(n, m));
