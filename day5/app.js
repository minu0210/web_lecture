/*

// HTML문서에 직접 접근할 수 있게!

const sumbitBtn = document.getElementById("submit-btn");
console.log(sumbitBtn);

const hiddenBtn = document.getElementsByClassName("hidden");

const [divA, divB, divC] = document.getElementsByTagName("div");
console.log(divA);

const radioInputs = document.getElementsByName("animal");
console.log(radioInputs);

const firstDiv = document.querySelector("div");
const [div1, div2, div3] = document.querySelectorAll("div");
console.log(div3);

const formInput = document.querySelector("form input:nth-child(1)");
console.log(formInput);

div1.innerText = "영역 1";

div1.classList.add("t1");
div1.classList.remove("t1");
div1.classList.toggle("t1"); // 존재하면 remove 존재하지 않으면 add

const newDiv = document.createElement("div");
newDiv.innerText = "추가된 영역!";
newDiv.className = "color-red";

const form = document.querySelector("form");
form.appendChild(newDiv);

// 브라우저 -> 유저가 입력, 마우스 등
// Event

const clickHandler = () => console.log("클릭됨!");
div1.addEventListener("click", clickHandler);

// div1.removeEventListener("click", clickHandler);

*/

// 이벤트 버블링 / 캡쳐링

const loginForm = document.querySelector(".login-form form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const loginSubmitHandler = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    if (username === "") {
        alert("값을 입력해주세요");
    } else if (username.length > 15) {
        alert("15자 이내로 작성해주세요");
    } else {
        greeting.classList.toggle("hidden");
        loginForm.classList.toggle("hidden");
        greeting.innerText = `${username}님, 환영합니다.`;
    }
    console.log(username);
};

loginForm.addEventListener("submit", loginSubmitHandler);
