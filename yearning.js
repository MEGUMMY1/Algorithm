function solution(name, yearning, photo) {
    var answer = [];
    let map = new Map();
    
    for(let i in name){
        map.set(name[i], yearning[i]);
    }
    
    for(let i in photo){
        let value = 0;
        for(let j in photo[i]){
            value += map.get(photo[i][j]) || 0;
        }
        answer.push(value);
    }
    
    return answer;
}
