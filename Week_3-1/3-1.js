// let age;
// age = 30;

// if(false) {
//     console.log('you can not smoke');
// } else {
//     console.log('you can smoke');
// }

// 한문장으로도 가능하다
// age > 19 ? console.log('you can smoke') : console.log('you can not smoke');


// -콘솔을 널로 없앨 수 있다. 
// let a;
// console.log(a);

// let b = null
// console.log(b);

// console.log(undefined === null)
// console.log(undefined == null)


// function addNumber (a,b) {
//     console.log('반환 전');
//     return a + b ;
//     console.log('반환후');
// }

// console.log('함수 실행 전');
// console.log(addNumber(1, 2));
// console.log('함수 실행 후');


// let a = document.getElementsByClassName('container')

// console.log(a);



// () -> 메서드:객체가 가지고 있는 함수
// .variable -> 객체가 가지고 있는 속성

// function name() { 
//     console.log("안녕 나는 함수야")
// };

// 1번 폰트가 안돼요. 2번 백그라운드가 안돼요 3번 엔터 눌러도 저장이 안돼요.
// Alt + Shift 는 밑에 바로 복사
// 컨트롤 + D 는 똑같은 단어 선택 가능 

let time = document.querySelector('.time');
let greeting = document.querySelector('.greeting');
let myName = document.querySelector('.myName');
let myFocus = document.querySelector('.myFocus');
let body = document.querySelector('body');

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    
    hour = hour > 12 ? hour - 12 : hour ;

    time.textContent = `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
    setTimeout(showTime, 1000);

}

function addZero(number) {
    return parseInt(number) < 10 ? '0' + number : number
};

function setBackground() {
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12) { 
        body.style.backgroundImage = 'url("./BG1.jpg")'
        body.style.backgroundSize = 'cover';
        greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) { 
        body.style.backgroundImage = 'url("./BG1.jpg")'
        body.style.backgroundSize = 'cover';
        greeting.textContent = 'Good afternoon, ';
    } else { 
        body.style.backgroundImage = 'url("./BG1.jpg")'
        body.style.backgroundSize = 'cover';
        body.style.color = 'white';
        greeting.textContent = 'Good evening, ';
    }
}

function getName() {
    if(localStorage.getItem('name1') === null)
    {
        myName.textContent = '[Enter name]';
    }  else{
        myName.textContent = localStorage.getItem('name1');
    }
}

function getFocus () {
    if(localStorage.getItem('focus1') === null)
    {
        myFocus.textContent = '[Enter focus]';
    }  else{
        myFocus.textContent = localStorage.getItem('focus1');
    }
}

myName.addEventListener('keydown', setName)

function setName(event) { 
    if (event.key === 'Enter') {
        localStorage.setItem('name1', event.target.textContent);
        myName.blur();
    } else{
        localStorage.setItem('name1', event.target.textContent);
    }
}

myFocus.addEventListener('keydown', setFocus)

function setFocus(event) { 
    if (event.key === 'Enter') {
        localStorage.setItem('focus1', event.target.textContent);
        myFocus.blur();
    } else{
        localStorage.setItem('focus1', event.target.textContent);
    }
}



showTime();
setBackground();
getName();
getFocus();