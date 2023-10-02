let [sec, min, hour] = [0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int = null; // will hold the id returned by setInterval

document.getElementById("start-timer").addEventListener("click", () => {
	if (int != null) {
		clearInterval(int);
	}
		int = setInterval(displayTimer, 1000);

})

function displayTimer() {
	sec = (sec + 1) % 60;
	min = sec == 0 ? (min + 1) % 60: min;
	hour = min == 0 && sec == 0 ? hour + 1: hour;

	let h = String(hour).padStart(2, "0"); // if single digit then insert 0 infront
	let m = String(min).padStart(2, "0");
	let s = String(sec).padStart(2, "0");

	timerRef.innerHTML = `${h} : ${m} : ${s}`;
}

document.getElementById("pause-timer").addEventListener("click", () => {
	clearInterval(int);
})

document.getElementById("reset-timer").addEventListener("click", () => {
	clearInterval(int);
	[sec, min, hour] = [0, 0, 0];
	timerRef.innerHTML = "00 : 00 : 00";
})