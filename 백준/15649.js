/*
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
*/
const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split(' ');
const n = parseInt(input[0]);
const m = parseInt (input[1]);

// 풀이
function solution(n, m) {
  let temp = [];
  let answer = "";
  let visited = [];

  function dfs(idx) {
    if (idx === m) {	
        const arr = [];
        for (let i = 0; i < m; i++) {
            arr.push(temp[i]);
        }
        return answer += `${arr.join(' ')}\n`;	// 수열 추가
    }
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            temp[idx] = i;
            visited[i] = true;
            dfs(idx + 1);	// 인덱스 증가 재귀
            visited[i] = false;
        }
    }
  }

  dfs(0); 	// 인덱스 0부터 시작

  return answer;
}

console.log(solution(n, m));
