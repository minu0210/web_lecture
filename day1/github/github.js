const pre = document.querySelector('#pre');
const next = document.getElementById('next')
const a1 = document.getElementsByClassName('1');
const a2 = document.getElementsByClassName('2');
const a3 = document.getElementsByClassName('3');
const a4 = document.getElementsByClassName('4');
const a5 = document.getElementsByClassName('5');
const a6 = document.getElementsByClassName('6');
const a7 = document.getElementsByClassName('7');
const a8 = document.getElementsByClassName('8');


window.addEventListener('DOMContentLoaded', function(){
    let page = 1;

    next.onclick = function (){
        console.log(page);

        document.getElementsByClassName(a+page).removeAttribute('id');
        
        page += 1;

        document.getElementsByClassName(a+page).id = 'on';

        document.getElementById
        if(page > 8){
            page -= 1;

        }

    };
});

