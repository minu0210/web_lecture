// 기본 자료형


const number = 20;
const name = `yeji's age is ${number}`;

console.log(name);

// null
// undefined
// NaN

// 참조 데이터 타입
const num1 = 1;
const num2 = 2;
const num3 = 3;

const arr = [1,2,3];
arr[0] = 10;
console.log(arr[0]);

const student = {
    name: "yeji",
    age: 40
};

console.log(student);

// 객체
// 1. 키값으로 문자, Symbol이라는 일부 자료형만 허용
// 2. 정렬과 관여X
// 3. 안의 데이터를 살펴보려면, 키값을 통해 배열을 얻어서 배열을 순회
// 4. 키 값 사용 등 직접 사이즈를 판별

const studentMap = new Map();
studentMap.set("name", "jibok");

console.log(studentMap);

// 맵
// 1. 키값으로 모든~! 데이터 타입을 허용
// 2. 삽입된 순서대로 정렬
// 3. map.size로 크기를 바로 알 수 있음!
// 4. map 자체로 순회할 수 있음

console.log(student['name']);
console.log(student.name);

// const arr = [1,1,0,0,3]; // [1, 0, 3]

const setArr = new Set();
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);

console.log(setArr);


// 연산자
// 산술, 증감, 대입, 비교, 논리 (비트, Nullish)

// 산술 (+, -, *, /, %, **)
// a/b -> 몫
// a%b -> 나머지

// 증감 (++, --)
let age = 10;

age = age + 1;
age += 1;
age++;

// 비교 연산자
// < > <= >=

// == (단순 값 비교) VS === (자료형까지 비교)
// !==

// 논리 연산자
// AND -> &&, OR -< ||, NOT -> !

// 삼항
// 조건? 참일때 실행결과 : 거짓일때 실행결과

// 대입 연산자
// &&=
// ||=

const nums = [10, 20];
function sum(a,b){
    return a+b;
};

console.log(sum(nums[0], nums[1]));
console.log(sum(...nums));

console.log(...arr);


if(arr[0] === 10){
    // 참일 때 실행
} else if (arr[0] === 1){
    // 두번 째 조건이 참일 때 실행
}
else{
    // 거짓일 때 실행
}

console.log(arr[0]);
switch(arr[0]){
    case 10:
        console.log("10이 맞습니다")
        break;
        //
    case 1:
        console.log("1이 맞습니다")
        break;
        //
    default:
        console.log("아무것도 아닙니다")
        break;
        //
};

let j = 0;
for(; j < 10;){
    console.log(j++)
}