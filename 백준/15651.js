/*
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 M개를 고른 수열
같은 수를 여러 번 골라도 된다.
*/
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const [n, m] = input.split(' ').map((i) => parseInt(i,10))

const allNum = Array(n).fill().map((v, i) => i+1)
const answer = []

// N과 M (1)의 순열 코드에서 선택했었던 값의 배열인 leftArr가 필요 없어짐
function permutation(currentArr) {
    if(currentArr.length === m) {
        answer.push(currentArr)
        return;
    }

    allNum.map((num, i) => {
        permutation([...currentArr, num])
    })
}

allNum.map((num, i) => {
    permutation([num])
})

let answerString = ''


answer.forEach((ans) => {
    answerString += ans.join(' ')
    answerString+= '\n'
})

console.log(answerString)
