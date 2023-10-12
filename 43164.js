/*
주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.

항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 
방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
tickets = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
return = ["ICN", "JFK", "HND", "IAD"]
*/
function solution(tickets) {
    let result = [];

        // (잔여 티켓, 현재 위치, 여행 경로)
    function DFS(tickets, current, route){
        if (!tickets.length) { // 티켓 모두 사용
            result.push(route); 
        } 
        else {
            tickets.forEach(([departure, arrival], index) => {
                if (current === departure) {
                    const remain = tickets.slice(); // 남은 티켓
                    remain.splice(index, 1);  // 사용 티켓 제거
                    DFS(remain, arrival, route.concat(arrival)); // 경로에 추가
                }
            });
        }
    };
    DFS(tickets, 'ICN', ['ICN']);   // 출발지 ICN 세팅
    
    return result.sort()[0];   // 알파벳 순 정렬
}
