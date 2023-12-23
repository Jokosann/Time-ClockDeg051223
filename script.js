const $ = (selector) => {
	return document.querySelector(selector);
};

const $clock = $(".clock");

const $dialline = document.getElementsByClassName("dialline");

for (let i = 1; i <= 59; i++) {
	$clock.innerHTML += `<div class="dialline"></div>`;
	$dialline[i].style.transform = `rotate(${6 * i}deg)`;
}
function setDate() {
	const now = new Date();
	const ss = now.getSeconds();
	const mm = now.getMinutes();
	const hh = now.getHours();

	const $second = $(".hand-second");
	const $minute = $(".hand-minute");
	const $hour = $(".hand-hour");

	const secondsDeg = (ss / 60) * 360 + 90;
	$second.style.transform = `rotate(${secondsDeg}deg)`;

	const minsDeg = (mm / 60) * 360 + (ss / 60) * 6 + 90;
	$minute.style.transform = `rotate(${minsDeg}deg)`;

	const hourDeg = (hh / 12) * 360 + (mm / 60) * 30 + 90;
	$hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();
