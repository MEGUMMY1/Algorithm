//문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
function solution(s) {
    var answer = [];
    let stack = [];
    for(let i in s){
        if(stack.includes(s[i])){
            answer[i] = stack.length - stack.lastIndexOf(s[i]);
        } else {
            answer[i] = -1;
        }
        stack[i] = s[i];
    }
    
    return answer;
}
