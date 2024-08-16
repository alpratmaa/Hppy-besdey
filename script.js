document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('birthdaySong');
    if (audio.paused) {
        audio.play();
        this.textContent = "Klik disini untuk menghentikan";
    } else {
        audio.pause();
        this.textContent = "Klik disini untuk memutar";
    }
});
