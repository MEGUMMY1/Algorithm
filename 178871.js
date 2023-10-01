/*
선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른
이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 
선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.
*/
/*function solution(players, callings) {
    var answer = players;
    let temp = "";
    
    for(let i in callings){
        for(let j in players){            
            if(callings[i] == players[j]){
                temp = players[j - 1];
                players[j - 1] = players[j];
                players[j] = temp;
            }
        }
    }
    
    return answer;
}*/
function solution(players, callings) {
    let maps = {};
    for(let i = 0; i < players.length; i++){
        maps[players[i]] = i;
    }
    callings.forEach(v => {
        let num = maps[v];
        let temp = players[num-1];
        players[num-1] = v;
        players[num] = temp;
        maps[v]--;
        maps[players[num]]++;
    })
    return Object.entries(maps).sort((a,b) => a[1] - b[1]).map(v => v[0]);
}
