let box = document.getElementsByClassName('box');
let count = 0;
for (let i = 0; i < 9; i++) {
	box[i].addEventListener('click', function() {
		if (count % 2 === 0 && box[i].firstElementChild.innerHTML === '') {
			box[i].firstElementChild.innerHTML = 'X';
			count++;
			announceWin();
		} else if (box[i].firstElementChild.innerHTML === '') {
			box[i].firstElementChild.innerHTML = 'O';
			count++;
			announceWin();
		}
	});
}

function announceWin() {
	if (
		(document.getElementById('box1').innerHTML === 'X' &&
			document.getElementById('box2').innerHTML === 'X' &&
			document.getElementById('box3').innerHTML === 'X') ||
		(document.getElementById('box4').innerHTML === 'X' &&
			document.getElementById('box5').innerHTML === 'X' &&
			document.getElementById('box6').innerHTML === 'X') ||
		(document.getElementById('box7').innerHTML === 'X' &&
			document.getElementById('box8').innerHTML === 'X' &&
			document.getElementById('box9').innerHTML === 'X') ||
		(document.getElementById('box1').innerHTML === 'X' &&
			document.getElementById('box4').innerHTML === 'X' &&
			document.getElementById('box7').innerHTML === 'X') ||
		(document.getElementById('box2').innerHTML === 'X' &&
			document.getElementById('box5').innerHTML === 'X' &&
			document.getElementById('box8').innerHTML === 'X') ||
		(document.getElementById('box3').innerHTML === 'X' &&
			document.getElementById('box6').innerHTML === 'X' &&
			document.getElementById('box9').innerHTML === 'X') ||
		(document.getElementById('box1').innerHTML === 'X' &&
			document.getElementById('box5').innerHTML === 'X' &&
			document.getElementById('box9').innerHTML === 'X') ||
		(document.getElementById('box7').innerHTML === 'X' &&
			document.getElementById('box5').innerHTML === 'X' &&
			document.getElementById('box3').innerHTML === 'X')
	) {
		alert('X wins');
	} else if (
		(document.getElementById('box1').innerHTML === 'O' &&
			document.getElementById('box2').innerHTML === 'O' &&
			document.getElementById('box3').innerHTML === 'O') ||
		(document.getElementById('box4').innerHTML === 'O' &&
			document.getElementById('box5').innerHTML === 'O' &&
			document.getElementById('box6').innerHTML === 'O') ||
		(document.getElementById('box7').innerHTML === 'O' &&
			document.getElementById('box8').innerHTML === 'O' &&
			document.getElementById('box9').innerHTML === 'O') ||
		(document.getElementById('box1').innerHTML === 'O' &&
			document.getElementById('box4').innerHTML === 'O' &&
			document.getElementById('box7').innerHTML === 'O') ||
		(document.getElementById('box2').innerHTML === 'O' &&
			document.getElementById('box5').innerHTML === 'O' &&
			document.getElementById('box8').innerHTML === 'O') ||
		(document.getElementById('box3').innerHTML === 'O' &&
			document.getElementById('box6').innerHTML === 'O' &&
			document.getElementById('box9').innerHTML === 'O') ||
		(document.getElementById('box1').innerHTML === 'O' &&
			document.getElementById('box5').innerHTML === 'O' &&
			document.getElementById('box9').innerHTML === 'O') ||
		(document.getElementById('box7').innerHTML === 'O' &&
			document.getElementById('box5').innerHTML === 'O' &&
			document.getElementById('box3').innerHTML === 'O')
	) {
		alert('O wins');
	}
}
