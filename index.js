let buttons = document.querySelectorAll('.btn');
let gameSequence = [];
let playerClicked = [];
var gameOn = false;
level = 0;

// document.addEventListener('keypress', function () {
// 	if (!gameOn) {
// 		gameOn = true;
// 		nextMove();
// 		document.body.style.backgroundColor = '#011F3F';
// 	}
// });

$(document).on('keypress', function () {
	if (!gameOn) {
		gameOn = true;
		nextMove();
		document.body.style.backgroundColor = '#011F3F';
	}
});

// for (var i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function () {
// 		playerClicked.push(this.id);
// 		timeOut = this.id;
// 		document.querySelector('#' + this.id).style.opacity = '0.5';
// 		setTimeout(function () {
// 			document.querySelector('#' + timeOut).style.opacity = '1';
// 		}, 200);

// 		checkAnswer(playerClicked.length - 1);
// 	});
// }

$('.btn').click(function () {
	playerClicked.push(this.id);
	timeOut = this.id;
	$('#' + this.id).css('opacity', '0.5');
	setTimeout(function () {
		$('#' + timeOut).css('opacity', '1');
	}, 200);

	checkAnswer(playerClicked.length - 1);
});

// for (var i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function () {
// 		playerClicked.push(this.id);
// 		timeOut = this.id;
// 		document.querySelector('#' + this.id).style.opacity = '0.5';
// 		setTimeout(function () {
// 			document.querySelector('#' + timeOut).style.opacity = '1';
// 		}, 200);

// 		checkAnswer(playerClicked.length - 1);
// 	});
// }

function playSound(color) {
	let audio = new Audio('sounds/' + color + '.mp3');
	audio.play();
}

function nextMove() {
	$('#level-title').html('Level ' + level);
	level++;
	setTimeout(function () {
		playerClicked = [];
		randomGame = $('.btn')[Math.floor(Math.random() * 4)].id;
		gameSequence.push(randomGame);
		$('#' + randomGame).css('opacity', '0.5');
		setTimeout(function () {
			$('#' + randomGame).css('opacity', '1');
		}, 100);
		playSound(randomGame);
	}, 700);
}

function checkAnswer(index) {
	if (playerClicked[index] === gameSequence[index]) {
		if (playerClicked.length === gameSequence.length) {
			nextMove();
		}
	} else {
		playSound('wrong');
		$('#level-title').html('Game Over, Press a key to restart');
		restart();
	}
}

function restart() {
	gameSequence = [];
	gameOn = false;
	level = 0;
	$('body').css('backgroundColor', 'red');
}
