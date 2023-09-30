function solution(players, callings) {
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
}
