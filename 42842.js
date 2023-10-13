/*
중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 
카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/
function solution(brown, yellow) {
    const total = brown + yellow;
    
    // 전체 카펫의 크기
    for (let width = 3; width <= total; width++) {
        // total을 width로 나누어 떨어지면 width가 카펫의 가로 길이일 가능성
        if (total % width === 0) {
            const height = total / width;
            
            // 테두리의 갈색 개수를 확인
            const border = (width - 2) * (height - 2);
            
            // 조건에 맞으면 결과 반환
            if (border === yellow) {
                return [Math.max(width, height), Math.min(width, height)];
            }
        }
    }
    
    return []; // 조건에 맞는 크기를 못 찾음
}
