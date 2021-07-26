// const fs = require ('fs') //모듈이란 작은 프로그램 단위 , require=> 내장함수

// fs.writeFileSync('notes.txt', 'I live in HCM')



// // var = 재할당, 재선언이 가능
// // let = 재할당 가능, 재선언 불가
// // const = 재할당,재선언 불가능


// const book = { //객체 = Object - 순서가 존재하지 않아요.
//     title: 'Daily routine',
//     author: 'Rak'
// }

// const book_one = ['Daily routine', 'Jongrak'] //배열 -순서가 존재해요.
// console.log(book_one[0])
// // console.log(book.author)
// console.log(square(2))

// const square = function (x){//변수에 함수를 할당
//     return x*x;
// }

// function square_two(x){//함수를 선언하는 경우
//     return x*x;
// }

// console.log(square(2))
// console.log(square_two(3))

// const plus = (x) => {
//     console.log(x);
// }// Arrow function

// const plus_one = function(x){
//     return x
// }

// plus(5)

// const partyGuest = {
//     name: 'Birthday Party',
//     guestList: ['Sean', 'Taehoon','Hyeon woo'],//배열
//     printGuestList(){
//         console.log('Guest list for' + this.name)

//         this.guestList.forEach((x) => {//배열 함수
//             console.log(x + ' is attending' + this.name)
//         })
//     }
// }

// const students = {
//     nameList: ['Sean','Jongrak','Sungrak'],
//     Callname(){
//         this.nameList.forEach((x) => {
//             console.log('안녕하세요 저희 수강생은' + x +'입니다.')
//         })
//     }
// }
// students.Callname()


// const plus = [1,2,3,4,5,6,7,8,9]

// plus.map((ele) => {
//     console.log(ele)
// })

