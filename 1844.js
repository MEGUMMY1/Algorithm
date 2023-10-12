/*
ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 
따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.

게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 
지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요. 
단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.
*/
function solution(maps) {
    const yLen = maps.length;
    const xLen = maps[0].length;
    const goalY = yLen - 1;
    const goalX = xLen - 1;
    const dy = [0, 0, 1, -1];
    const dx = [-1, 1, 0, 0];
    
    const queue = [];
    queue.push([0, 0, 1]);  // 시작 칸
    
    while(queue.length > 0) {
        const [curY, curX, move] = queue.shift(); 
        if(curY === goalY && curX === goalX) return move;
        
        for(let i = 0; i < 4; i++) {
            const ny = curY + dy[i];
            const nx = curX + dx[i];
            if(ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1) {
                queue.push([ny, nx, move + 1]);
                maps[ny][nx] = 0;   // 재방문 막기 위함
            }
        }
    }    
    return -1;  // 도착 불가
}
