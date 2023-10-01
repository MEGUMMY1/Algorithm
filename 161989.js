/*
정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 
매개변수로 주어질 때 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요.
*/
function solution(n, m, section) {
    var answer = 1; // 최소 1회 칠함
    let start = section[0];
    let end = section[0] + (m-1);
    
    for(let i in section){
        if(section[i] >= start && section[i] <= end){
            continue;
        } else {
            start = section[i];
            end = section[i] + (m-1);
            answer++;
        }    
    }    
    return answer;
}
