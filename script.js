const drums = Array.from(document.querySelectorAll(".drum"));
const audio = document.getElementById("audio");

drums.forEach((drum) => {
	drum.addEventListener("click", function () {
		playAudioOnClick("sounds/tom-2.mp3", "w", this.innerHTML);
		playAudioOnClick("sounds/tom-1.mp3", "a", this.innerHTML);
		playAudioOnClick("sounds/tom-3.mp3", "s", this.innerHTML);
		playAudioOnClick("sounds/tom-4.mp3", "d", this.innerHTML);
		playAudioOnClick("sounds/snare.mp3", "j", this.innerHTML);
		playAudioOnClick("sounds/crash.mp3", "k", this.innerHTML);
		playAudioOnClick("sounds/kick-bass.mp3", "l", this.innerHTML);
	});
});
window.addEventListener("keypress", function (event) {
	playAudioOnKeyPressed("sounds/tom-1.mp3", "w", event);
	playAudioOnKeyPressed("sounds/tom-2.mp3", "a", event);
	playAudioOnKeyPressed("sounds/tom-3.mp3", "s", event);
	playAudioOnKeyPressed("sounds/tom-4.mp3", "d", event);
	playAudioOnKeyPressed("sounds/snare.mp3", "j", event);
	playAudioOnKeyPressed("sounds/crash.mp3", "k", event);
	playAudioOnKeyPressed("sounds/kick-bass.mp3", "l", event);
});

async function playAudioOnKeyPressed(source, key, event) {
	if (event.key === key) {
		const audio = new Audio(source);
		await audio.play();
		document.querySelector(`.${key}`).classList.add("pressed");
		setInterval(() => {
			document.querySelector(`.${key}`).classList.remove("pressed");
		}, 500);
	}
}
async function playAudioOnClick(source, key, buttonInnerHTML) {
	switch (buttonInnerHTML) {
		case key:
			const audio = new Audio(source);
			await audio.play();
			document.querySelector(`.${key}`).classList.add("pressed");
			setInterval(() => {
				document.querySelector(`.${key}`).classList.remove("pressed");
			}, 500);
	}
}
