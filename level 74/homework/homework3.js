document.addEventListener('DOMContentLoaded', function() {
    const clockDisplay = document.getElementById('საათი');

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        if (clockDisplay) {
            clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }

    if (clockDisplay) {
        updateClock();
        setInterval(updateClock, 1000);
    }
});