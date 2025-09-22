const audio = document.getElementById("meenSong");

// Event ketika heart (checkbox) diklik
$("#messageState").on("change", () => {
	$(".message").removeClass("openNor closeNor");

	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed no-anim").addClass("openNor");
		$(".heart").removeClass("closeHer openedHer").addClass("openHer");
		$(".container").stop().animate({ "backgroundColor": "#f48fb1" }, 2000);
		console.log("Abrindo");

		// ▶️ Play audio
		audio.currentTime = 0;
		audio.play().catch(err => console.log("Autoplay error:", err));
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".heart").removeClass("openHer openedHer").addClass("closeHer");
		$(".container").stop().animate({ "backgroundColor": "#fce4ec" }, 2000);
		console.log("fechando");

		// ⏹️ Pause and reset audio
		audio.pause();
		audio.currentTime = 0;
	}
});

// Saat animasi pesan selesai
$(".message").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
	console.log("Animation End (message)");
	if ($(".message").hasClass("closeNor")) {
		$(".message").addClass("closed");
	}
	$(".message").removeClass("openNor closeNor").addClass("no-anim");
});

// Saat animasi heart selesai
$(".heart").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
	console.log("Animation End (heart)");
	if (!$(".heart").hasClass("closeHer")) {
		$(".heart").addClass("openedHer beating");
	} else {
		$(".heart").addClass("no-anim").removeClass("beating");
	}
	$(".heart").removeClass("openHer closeHer");
});