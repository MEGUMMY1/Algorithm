/*
예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 
다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 
과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.
*/

function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a, b) => b - a);   // 내림차순 정렬
    let index = m - 1;  // 제일 낮은 점수를 가진 인덱스
    let box = Math.floor(score.length / m)  // 박스 개수
  
    for (let i = 0; i < box; i++) {
        answer += score[index] * m; // 낮은 점수부터 박스 포장
        index += m; // 포장된 사과 개수만큼 인덱스 증가
    }
    return answer;
}
