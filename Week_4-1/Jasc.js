// let profile = {
//     name: 'JR',
//     age: 29,
//     homework: {
//         title: 'Photo Picker project',
//         language: 'Korean'
//     }
// }

// // console.log(profile.name);
// // profile.name = 'Choi'
// // console.log(profile.name)
 
// // console.log(profile.company)
// // profile.company = 'LIKELION'
// // console.log(profile.company)

// // console.log(profile.age)
// // delete profile.age;
// // console.log(profile.age)

// let greeings = {
//     sayHello: function(name) {
//         console.log(`Hello ${name}`)
//     },
//     sayBye:function(name){
//         console.log(`Bye ${name}`)
//     },
//     sayAge: function(age) {
//         console.log(`i'm ${age} old`)
//     }
// }

// // greeings.sayHello('종락');
// // greeings.sayBye('종락')
// // console.log('종락')

// greeings.sayHello('JR');
// greeings.sayBye('JR')
// greeings.sayAge(29)

let images = document.getElementsByClassName('slide')
let arrowLeft = document.getElementById('arrow-left')
let arrowRight = document.getElementById('arrow-right')
let index = 0;

function reset () {
    for(let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
}

function startSlide () {
    reset()
    images[0].style.display = 'block'
}

function rightImage() {
    reset()
    images[index + 1].style.display = 'block';
    index = index + 1;
}

arrowRight.addEventListener('click', clickRight )

function clickRight () {
    if(index === 3) {
        index = images.length;
    }
    rightImage()
}

function leftImage() {
    reset()
    images[index - 1].style.display = 'block'
    index = index - 1;
}

arrowLeft.addEventListener('click', clickLeft )

function clickLeft () {
    if(index === 0) {
        index = images.length;
    }
    leftImage()
}


startSlide();
console.log(images)

