/*
두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.
예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 
"hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 
최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
*/
function solution(begin, target, words) {
    const visited = [];
    
    if(!words.includes(target)) // words 배열에 target 없음
        return 0;
    
    const queue = [];
    queue.push([begin, 0]); // 시작
    
    while(queue.length > 0){
        const [w, count] = queue.shift();
        if(w === target) return count; // 현재 단어와 target 일치

        words.forEach(word => {
            if(visited.includes(word)) return; // 방문여부 확인
            
            let diff = 0;   // 다른 알파벳 개수
            for (let i in word) {
                if (w[i] !== word[i]) diff++; 
            }
            if(diff === 1) { // 다른 알파벳이 하나일때만 push
                queue.push([word, count+1]);
                visited.push(word);
            }            
        });
    }
}
