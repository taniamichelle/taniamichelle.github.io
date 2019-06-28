//TweenMax: header should bounce to a larger size in 3sec
TweenMax.to('.container header h1', 3, {
    scale: 1.075, ease: Bounce.easeOut
});

//click: loginBtn
const logInColor = document.querySelector('.loginBtn');

logInColor.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'azurishWhite';
});
