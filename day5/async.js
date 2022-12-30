async function f1() {
    // await 사용 가능

    let p = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료"), 1000);
    });
    let result = await p;

    console.log(result);
}

f1();

async function getDataFromAPI() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => {
            // data를 응답받은 후의 로직 ...
        })
        .then(() => {})
        .then(() => {})
        .catch((error) => alert(error.message));
}
