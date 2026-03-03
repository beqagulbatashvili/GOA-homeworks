document.addEventListener('DOMContentLoaded', function() {
    const secondsInput = document.getElementById('წამებისშეყვანა');
    const startTimerBtn = document.getElementById('ტაიმერისდაწყებისღილაკი');
    const timerDisplay = document.getElementById('ტაიმერისჩვენება');
    let countdownInterval;

    if (secondsInput && startTimerBtn && timerDisplay) {
        startTimerBtn.addEventListener('click', function () {
            clearInterval(countdownInterval);

            let timeLeft = parseInt(secondsInput.value);
            timerDisplay.textContent = timeLeft;

            countdownInterval = setInterval(function () {
                timeLeft--;
                if (timeLeft > 0) {
                    timerDisplay.textContent = timeLeft;
                } else {
                    timerDisplay.textContent = "დრო ამოიწურა!";
                    clearInterval(countdownInterval);
                }
            }, 1000);
        });
    }
});