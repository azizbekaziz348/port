let prev = document.getElementById('prev');
let next = document.getElementById('next');
let imgs = document.querySelectorAll('img');




let i = 0;
next.onclick = function () {
	imgs[i].classList.remove('active');
	i++;
	if (imgs.length <= i) {
		i = 0;
	}
	imgs[i].classList.add('active');
}

prev.onclick = function () {
	imgs[i].classList.add('active');
	i--;
	if (i < 0) {
		i = imgs.length - 1;
	}
	imgs[i].classList.remove('active');
}
setInterval(function () {
	imgs[i].classList.remove('active');
	i++;
	if (imgs.length <= i) {
		i = 0;
	}
	imgs[i].classList.add('active');
	console.log('instanceof')

}, 5000);


