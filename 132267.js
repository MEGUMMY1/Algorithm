// 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제
function solution(a, b, n) {
    var answer = 0;
    var temp = 0;
    while(n >= a){
        temp = Math.floor(n / a) * b; // 새로 받은 콜라
        n = temp + (n % a); // 새로 받은 콜라 + 남은 빈 병
        answer += temp;
    } 
    return answer;
}
