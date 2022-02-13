"use strict";

const btns = document.querySelectorAll('button');

// btn.onclick = function() {
//     alert("Click");
// };
let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    // i++;
    // if(i === 1) {
    //     // btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});