let box = document.getElementsByClassName('box');
let count = 0;
let map = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const data = [['', '', ''], ['', '', ''], ['', '', '']];
//iterate data and generate the div for <div class="box"><h1 id="box1"></h1></div>
// if it's '', then initial state, empty
// if computer put, then O
// if computer put, then X

for (let i = 0; i < 9; i++) {
	box[i].addEventListener('click', function() {
		if (count % 2 === 0 && box[i].firstElementChild.innerHTML === '') {
			box[i].firstElementChild.innerHTML = 'X';
			delete map[i];
			let j = 0;
			while (j < 9) {
				if (map[j] !== undefined) {
					box[j].firstElementChild.innerHTML = 'O';
					delete map[j];
					break;
				} else {
					j++;
				}
			}
			count += 2;
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
