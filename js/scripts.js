"use strict";

// jQuery('.mobile-button').on('click', function() {
//     jQuery(this).toggleClass('open');
//     jQuery('header').toggleClass('openNav');
// });
document.querySelector('.mobile-button').onclick = function () {
  document.querySelector('.mobile-button').classList.toggle('open');
  document.querySelector('.nav').classList.toggle('openNav');
}; // const mobileBtn = document.querySelector('.mobile-button');
// const handleClick = () => {
//     mobileBtn.classList.add('open');
// };
// mobileBtn.addEventListener('click', handleClick);