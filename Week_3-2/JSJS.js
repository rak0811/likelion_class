
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);
// console.log(numbers[6]);
// console.log(numbers[7]);
// console.log(numbers[8]);
// console.log(numbers[9]);



// for(let i = 1; 10 < 100; i++) {
//     if(i % 2 === 0)
//         console.log(i);

// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function(a){
//     console.log(a)
// })

// console.log(1);
// console.log(2);


let current = document.querySelector('.current')
let images = document.querySelectorAll('.images img')

console.log(images);

images[0].style.opacity = 0.5;

images.forEach(function(image) {
    image.addEventListener('click', imgClick)
})

function imgClick(a){
    current.src= a.target.src;
    // console.log(a.target)

    images.forEach(function(image) {
        image.style.opacity = 1;
    })
    a.target.style.opacity = 0.5;
}