// document.querySelector('.Dark-Button').addEventListener('click', displaydark) 

// function displaydark() {
//     document.querySelector('body').style.backgroundColor = 'black';
//     document.querySelector('body').style.color = 'white';
// }


// document.querySelector('.Light-Button').addEventListener('click', displayLight)

// function displayLight() {
//     document.querySelector('body').style.backgroundColor = 'white';
//     document.querySelector('body').style.color = 'black';
// }

// 변수,콘솔
// console.log(1) ;
// console.log(2) ;
// if(false) {
//     console.log(3);
// } else {
//     console.log(4);
// }
// console.log(5);

// 내가 했던거 
// let darklightbutton = document.querySelector('.Dark-Light-Button');
// let body =   document.querySelector('body');

// let darklightbutton

// document.querySelector('.Dark-Light-Button').addEventListener('click', darklightbutton);
//     document.querySelector('body').style.backgroundColor = 'black';
//     document.querySelector('body').style.color = 'white';

//     function darklightbutton() {
//         if(dakDark-Light-Button.value === 'Dark'){
//             body.style.backgroundColor = 'black';
//             body.style.color = 'white';
            
//         } else { 
//             body.style.backgroundColor = 'white'
//             body.style.color = 'black'
//         }
//     }

// let temperauture = -1;
// if(temperauture < 0) {
//     console.log('물이 업니다.')
// } else if (temperauture < 100) {
//     console.log('물이 얼지 않습니다.')
// } else {
//     console.log('물이 끓습니다.')
// }




let Change = document.querySelector('.AA');
let body = document.querySelector('body');
document.querySelector('.AA').addEventListener('click', darkLightButton);
function darkLightButton() {
    if(Change.value === 'Dark') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        Change.value = 'Light';
} 
    else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        Change.value = 'Dark';
    };
};






let score = 100;
if(score > 90) {
    console.log('A')
} else if(score > 80) {
    console.log('B')
} else if(score > 70) {
    console.log('C')
} else (score > 60) 