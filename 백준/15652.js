/*
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 M개를 고른 수열
같은 수를 여러 번 골라도 된다.
고른 수열은 비내림차순이어야 한다.
- 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.
*/
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

const n = parseInt(input[0], 10)
const m = parseInt(input[1], 10)

// 1~N까지의 자연수 배열 만들기
const numberArr = Array(n).fill().map((_, i) => i+1)
let answerArr = []

function permutation(currentPick) {
    if(currentPick.length === m) {
        answerArr.push(currentPick.sort());
        return;
    }

    const recentPick = currentPick.length === 0 ? 1 : currentPick[currentPick.length - 1];

    const updateNumberArr = numberArr.filter((num) => num >= recentPick)

    // restArr 에서 하나 뽑기
    updateNumberArr.forEach((rest, i) => {
        permutation([...currentPick, rest])
    })
}

// answerArray 에 들어가있으면 제거하면된다 
function removeDuplicate(arr) {
    const temp =  [...new Set(arr.join('|').split('|'))]
    return temp.map((v) => v.split(','))
}


permutation([])

answerArr = removeDuplicate(answerArr)

let answerString = ''

answerArr.forEach((arr) => answerString += `${arr.join(' ')}\n`)

console.log(answerString)
