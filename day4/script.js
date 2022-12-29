/*
const name = "yeji";
const age = 17;
console.log(typeof name);
console.log(typeof (age));

const arr = [1,2,3];
console.log(typeof arr);

const temp = null;
console.log(typeof temp);

const tmp = null + 123;
console.log(typeof tmp);

console.log(!null);

null -> 0 취급
undefined -> NaN 취급

let tmp;
console.log(tmp+123);

console.log(!undefined === !null);

let tmp = 11 + "yeji"; // "11yeji"
console.log(String(tmp));

console.log(Boolean(!!"yeji")); // true
console.log(Boolean(!!"")); // false

console.log(isNaN(11)); // isNaN -> false : 숫자라는 뜻
console.log(isNaN(11+"yeji")); // isNaN -> true

console.log(Number.isNaN(11)); // isNaN -> false : 숫자라는 뜻
console.log(Number.isNaN(11+"yeji")); // Number.isNaN -> false

function example(){
    return condition1 ? value1 : conditiono2 ? value2 : condition3 ? value3 : value4
};

const condition = checkCondition(c);

function example2(){
    if(condition1) {
        return value1;
    }
    else if(conditiono2) {
        return value2;
        }
    else if (condition3) {
        return value3;
        }
    else{
        return value4;
    }
}

const ex3 = condition1 ?((a===0) ? 'zero' : 'positive') : 'negative';

function greeting (isLogin) {
    const name = isLogin ? getName() : '이름없음';

    return `안녕하세요 ${name}`;
}

function greeting (isLogin) {
    if(isLogin){
        return `안녕하세요 ${getName()}`;
    }

    return `안녕하세요 이름없음`;
}

if ("string".length > 0) {
  console.log("빈 문자열이 아님");
}

if (!isNaN(10)) {
  console.log("숫자가 맞음");
}

const bool = true;
if (bool === true) {
  console.log("참");
}

if ("string".length) {
  console.log("빈 문자열이 아님");
}

if (10) {
  console.log("숫자가 맞음");
}

const bool2 = true;
if (bool2) {
  console.log("참");
}

function printName(name) {
  if (name === undefined || name === null) {
    console.log("아무도 없네요");
  } else {
    console.log(`반갑습니다 ${name}님!`);
  }
}

function printName(name) {
  if (!name) {
    console.log("아무도 없네요");
  } else {
    console.log(`반갑습니다 ${name}님!`);
  }
}

console.log(true && false && "과연?");

console.log(true || false || "이번에는?");

function callAPI() {
  // ...

  const data = "...";

  // if(data){
  //     return "";
  // }else{
  //     return "fetching...";
  // }

  // return data ? data : "fetching...";
  return data || "fetching...";
}

// 유저가 로그인을 했고 유저가 이름이 유의미하다면 이름을 표시 아니면 '이름없음'
const customer = {
  name: "yeji",
  age: 20,
};
const isLogined = true;

function getActiveUserName(isLogin, user) {
  let user_name;
  let user_age;

  if (isLogin) {
    if (user) {
      if (user.name) {
        user_name = user.name;
        user_age = user.age;
      } else {
        user_name = "이름없음";
      }
    }
  }

  return { user_name, user_age };
}

console.log(getActiveUserName(isLogined, customer));

// function getUserName(isLogin) {
//     if(isLogin && user){

//     };
//     return user.name ? user.name || '이름없음'
// }

if (!Number.isNaN(3)) {
  console.log("숫자입니다");
}

const arr = [1, 2, 3];

const [firstNum, secondNum, LastNum] = arr;

const objArr = { 0: 1, 1: 2, 2: 3 };

console.log(Array.isArray(arr));
console.log(Array.isArray(objArr));

console.log(arr.length);

arr.length = 0; // []
console.log(arr.length);
console.log(arr);

// const confirmBtn = document.getElementsByTagName('button')[0];
// const cancelBtn =  document.getElementsByTagName('button')[1]
// const resetBtn = document.getElementsByTagName('button')[2]

const [confirmBtn, cancelBtn, resetBtn] =
  document.getElementsByTagName("button");

const originArray = ["123", "456", "789"];

const newArray = originArray;

console.log(originArray.push(10));
originArray.push(20);
originArray.push(30);

console.log(originArray);
console.log(newArray);

// 유사 배열 객체

const arr1 = ["hello", "javascirpt"];
console.log(arr1);

const objLikeArr = { 0: "hello", 1: " javascript", length: 2 };
const converted = Array.from(objLikeArr);
console.log(objLikeArr);
console.log(converted);
*/

// 함수

// 함수 선언식
function sum1(a, b) {
  return a + b;
}

// 함수 표현식
const sum2 = function (a, b) {
  return a + b;
};

const person = {
  eyes: 2,
  // speak: function () {
  //   console.log("...");
  // },
  speak: () => console.log("..."),
};

// 화살표 함수
const sum3 = (a, b) => a + b;
// (매개변수) => { // 실행할 문장... }

// 화살표 함수 어디에 많이 쓰나!
// 함수 내에 콜백함수로 건네줄 때 많이 사용
const array1 = ["a", "b", "c"];

array1.forEach((arrItem) => console.log(arrItem));

// arrow function의 단점
console.log(this);

const student = {
  age: 17,
  sayAge: () => {
    console.log(this); // 자기 자신 참조 불가!
    console.log(this.age);
  },
};

student.sayAge();

// ['학생 a' '학생 b' '학생 c'] -> map() vs forEach()

const students = array1.map((name) => "학생" + name);
console.log(students);

function temp() {
  return 1 + 2;
}
console.log(temp(1, 2, 3, 4, 5));

// getWonPrice()
// 1. '원' 글자를 붙여 원화 표기
// 2. 1000원 초과 값만 남기기
// 3. 오름차순 정렬
const price = ["2000", "1000", "3000", "5000", "4000"];

function getWonPrice(pricelist) {
  const filterPrice = pricelist.filter(
    (pricelists) => Number(pricelists) > 1000
  );
  const sortWon = filterPrice.sort((a, b) => a - b);

  const result = sortWon.map((sortWon) => sortWon + "원");
  return result;
}
console.log(getWonPrice(price));

/*
  // 가위바위보
  - 가위 바위 보 버튼 3개
  - 버튼 클릭 시 시작
  - 컴퓨터는 랜덤하게 가위 바위 보 중 하나 선택
  - 각 선택 값과 결과 표시 ( 유저기준 )
*/
// const button = document.getElementsByClassName("game");

// button.addEventListener("click", () => {
//   console.log("aaa");
//   // const com = Math.floor(Math.random() * 3);
//   // console.log(com);
// });
