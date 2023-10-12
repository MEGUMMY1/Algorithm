/*
모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
*/
function solution(sizes) {
    var answer = 0;
    let maxW = 0;
    let maxH = 0;
    for(let i = 0; i < sizes.length; i++){
        maxW = Math.max(maxW, Math.max(sizes[i][0], sizes[i][1]));
        maxH = Math.max(maxH, Math.min(sizes[i][0], sizes[i][1]));
    }
    return answer = maxW * maxH;
}
