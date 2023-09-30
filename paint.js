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
