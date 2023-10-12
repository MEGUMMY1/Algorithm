/*
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 
나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 
이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요
*/
function solution(citations) {
    var answer = 0;
    
    citations.sort((a, b) => b - a);  // 내림차순 정렬
    
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            answer = i + 1;  // 현재 h-index 업데이트
        } else {
            break;  // 더 이상 h-index가 올라갈 수 없음
        }
    }
    
    return answer;
}
