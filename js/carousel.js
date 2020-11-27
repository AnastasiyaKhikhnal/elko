'use strict';

function OpenImage(a) {
  let wrap = document.getElementById('wrapperImg');
  wrap.style.display = 'block';

  let img = document.createElement('img');
  img.src = a;
  img.className = 'bigImg';
  wrap.appendChild(img);
}

function CloseImage() {
  let wrap = document.getElementById('wrapperImg');
  wrap.style.display = 'none';
}

// ___________________________________________
// function OpenImage(a,b) {
//   let wrap = document.getElementById('wrapperImg');
//   wrap.style.display = 'flex';
//
//   let img1 = document.createElement('img');
//   img1.src = a;
//   img1.className = 'bigImg';
//   wrap.appendChild(img1);
//
//   if (b) {
//     let img2 = document.createElement('img');
//     img2.src = b;
//     img2.className = 'bigImg';
//     wrap.appendChild(img2);
//   }
//
// }
//
// function CloseImage() {
//   let wrap = document.getElementById('wrapperImg');
//   wrap.style.display = 'none';
// }