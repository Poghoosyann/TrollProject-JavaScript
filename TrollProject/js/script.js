let yes = document.querySelector('#yes');
let btn = document.querySelector('#btn');
let h1 = document.querySelector('.title');
let button = document.querySelector('.buttons');

document.addEventListener('DOMContentLoaded', function () {
    var moveButton = document.getElementById('btn');
    var isMoving = true;

    moveButton.addEventListener('mouseover', function () {
      if (!isMoving) {
        isMoving = true;
        moveButton.style.transform = 'translateX(180px)';
      }
      else if (isMoving) {
        isMoving = false;
        moveButton.style.transform = 'translateY(50px)';
      }
    });
  });

yes.addEventListener('click', function(){
    h1.textContent = "Don't worry)))"
    button.style.display = 'none'
})

btn.addEventListener('click', function(){
    h1.textContent = 'Error 404 :)))'
    button.style.display = 'none'
})