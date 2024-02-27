/*
KOI 통신연구소는 레이저를 이용한 새로운 비밀 통신 시스템 개발을 위한 실험을 하고 있다. 
실험을 위하여 일직선 위에 N개의 높이가 서로 다른 탑을 수평 직선의 왼쪽부터 오른쪽 방향으로 차례로 세우고, 각 탑의 꼭대기에 레이저 송신기를 설치하였다. 
모든 탑의 레이저 송신기는 레이저 신호를 지표면과 평행하게 수평 직선의 왼쪽 방향으로 발사하고, 탑의 기둥 모두에는 레이저 신호를 수신하는 장치가 설치되어 있다. 
하나의 탑에서 발사된 레이저 신호는 가장 먼저 만나는 단 하나의 탑에서만 수신이 가능하다.

예를 들어 높이가 6, 9, 5, 7, 4인 다섯 개의 탑이 수평 직선에 일렬로 서 있고, 모든 탑에서는 주어진 탑 순서의 반대 방향(왼쪽 방향)으로 동시에 레이저 신호를 발사한다고 하자. 
그러면, 높이가 4인 다섯 번째 탑에서 발사한 레이저 신호는 높이가 7인 네 번째 탑이 수신을 하고, 높이가 7인 네 번째 탑의 신호는 높이가 9인 두 번째 탑이, 
높이가 5인 세 번째 탑의 신호도 높이가 9인 두 번째 탑이 수신을 한다. 높이가 9인 두 번째 탑과 높이가 6인 첫 번째 탑이 보낸 레이저 신호는 어떤 탑에서도 수신을 하지 못한다.

탑들의 개수 N과 탑들의 높이가 주어질 때, 각각의 탑에서 발사한 레이저 신호를 어느 탑에서 수신하는지를 알아내는 프로그램을 작성하라.
*/
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0], 10)
const arr = input[1].toString().trim().split(' ').map(Number);

function findReceivingTowers(arr) {
    const stack = []; // 이전 탑들의 정보 저장
    const result = []; // 결과 배열

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0) { // 스택이 비어있지 않고
            if (arr[i] > arr[stack[stack.length - 1]]) {    // 현재 탑의 높이가 스택의 맨 위 탑보다 높으면
                stack.pop(); // 현재 탑보다 낮은 탑들 제거
            } else {
                result.push(stack[stack.length - 1] + 1); // 현재 탑의 레이저를 수신하는 탑 저장
                break; // 다음 탑으로 이동
            }
        }
        // 현재 탑의 레이저를 수신하는 탑이 없으면 0 저장
        if (stack.length === 0) {
            result.push(0);
        }
        stack.push(i); // 현재 탑의 인덱스를 스택에 추가
    }

    return result.join(' ');
}

console.log(findReceivingTowers(arr))
