var main = document.querySelector('main'),
	canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	text = document.querySelector('.text'),
	ww = window.innerWidth,
	menu = document.querySelector('.menu'),
	ul = menu.querySelector('ul'),
	idx = 0,
	count = ul.childElementCount - 1,
	toggle = true,
	frame;

canvas.width = ww / 3;
canvas.height = (ww * 0.5625) / 3;

function snow(ctx) {
	var w = ctx.canvas.width,
		h = ctx.canvas.height,
		d = ctx.createImageData(w, h),
		b = new Uint32Array(d.data.buffer),
		len = b.length;

	for (var i = 0; i < len; i++) {
		b[i] = ((255 * Math.random()) | 0) << 24;
	}

	ctx.putImageData(d, 0, 0);
}

function animate() {
	snow(ctx);
	frame = requestAnimationFrame(animate);
}

// Glitch
for (var i = 0; i < 4; i++) {
	var span = text.firstElementChild.cloneNode(true);
	text.appendChild(span);
}

window.addEventListener('DOMContentLoaded', function(e) {
	setTimeout(function() {
		main.classList.add('on');
		main.classList.remove('off');
		animate();
	}, 1000);
});

var loginForm = document.getElementById('loginForm');
var loginScreen = document.getElementById('loginScreen');
var mainMenu = document.getElementById('mainMenu');
var loginError = document.getElementById('loginError');
var isAuthenticated = false;

loginForm.addEventListener('submit', function(e) {
	e.preventDefault();
	var passwordInput = document.getElementById('password').value;

	if (passwordInput === '91061262') {
		loginScreen.classList.add('hidden');
		mainMenu.classList.remove('hidden');
		isAuthenticated = true; 
	} else {
		loginError.textContent = "ACCESS DENIED";
		document.getElementById('password').value = '';
		setTimeout(function() {
			loginError.textContent = "";
		}, 2000);
	}
});


window.addEventListener('DOMContentLoaded', function(e) {
	setTimeout(function() {
		main.classList.add('on');
		main.classList.remove('off');
		animate();
	}, 1000);

	setTimeout(function() {
		var passwordInput = document.getElementById('password');
		if (passwordInput) {
			passwordInput.focus();
		}
	}, 3000);
});

window.addEventListener('keydown', function(e) {
	if (!isAuthenticated) return;

	var key = e.keyCode;
	var prev = idx;
	if (key == 38 || key == 40) {
		e.preventDefault();

		switch (key) {
			case 38:
				if (idx > 0) {
					idx--;
				}
				break;
			case 40:
				if (idx < count) {
					idx++;
				}
				break;
		}

		ul.children[prev].classList.remove('active');
		ul.children[idx].classList.add('active');
	}
}, false);

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', (event) => {
    if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
        (event.ctrlKey && event.key === 'u')
    ) {
        event.preventDefault();
    }
});