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
