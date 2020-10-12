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