const $ = (selector) => {
	return document.querySelector(selector);
};

const $clock = $('.clock');
const $points = $('.points');
// var number clock
j = 12;

// looping dialine
for (let i = 0; i <= 360; i += 6) {
	let dialline = document.createElement('span');
	dialline.className = 'dialline';
	if ((i / 6) % 5 == 0) {
		dialline.classList.add('big');
		let text = document.createElement('span');
		text.className = 'text';
		text.innerHTML = j;
		text.style.transform = `rotate(${-i}deg) translateY(2px)`;
		if (j == 12) {
			j = 0;
		}
		j = j + 1;
		dialline.appendChild(text);
	}
	dialline.style.transform = `rotate(${i}deg) translateY(-194px)`;
	$points.appendChild(dialline);
}

// function set date time
function setDate() {
	const now = new Date();
	const ss = now.getSeconds() * 6;
	const mm = now.getMinutes() * 6;
	const hh = now.getHours() * 30;

	const $second = $('.hand-second');
	const $minute = $('.hand-minute');
	const $hour = $('.hand-hour');

	// transition
	$second.style.transition = ss == 0 ? 'none' : '0.25s';
	$minute.style.transition = mm == 0 ? 'none' : '0.25s';
	$hour.style.transition = hh == 0 ? 'none' : '0.25s';

	// transform
	$second.style.transform = `rotate(${ss - 180}deg)`;
	$minute.style.transform = `rotate(${mm - 180}deg)`;
	$hour.style.transform = `rotate(${hh - 180}deg)`;
}

// function set date today
function setToday() {
	const day = $('.day');
	const date = $('.date');
	const mounth = $('.mounth');
	const year = $('.year');

	const dd = new Date().getDay();
	const dt = new Date().getDate();
	const mm = new Date().getMonth();
	const yy = new Date().getFullYear();

	const mounthName = [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	];
	const dayName = [
		'sunday',
		'monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	day.innerHTML = dayName[dd];
	date.innerHTML = dt;
	mounth.innerHTML = mounthName[mm];
	year.innerHTML = yy;
}
setToday();
setInterval(setToday, 8400000);

setInterval(setDate, 1000);
