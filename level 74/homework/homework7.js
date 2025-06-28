document.addEventListener('DOMContentLoaded', function() {
    const sentences = [
        "სწრაფი ყავისფერი მელა ზარმაც ძაღლზე ხტება.",
        "არასოდეს არ შეაფასოთ კარგი წიგნის ძალა.",
        "ტექნოლოგიამ შეცვალა ჩვენი ცხოვრებისა და მუშაობის გზა.",
        "მზე ყოველთვის წვიმის შემდეგ ყველაზე კაშკაშა ანათებს.",
        "წარმოსახვა უფრო მნიშვნელოვანია ვიდრე ცოდნა.",
        "ადრეული ფრინველი ჭიას იჭერს.",
        "პრაქტიკა სრულყოფს ყველა მცდელობას."
    ];

    const sentenceDisplay = document.getElementById('წინადადებისჩვენება');
    const typingArea = document.getElementById('აკრეფისარეა');
    const startTestBtn = document.getElementById('ტესტისდაწყებისღილაკი');
    const resultsDiv = document.getElementById('შედეგები');

    let startTime;
    let currentSentence = '';

    function startTest() {
        currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
        sentenceDisplay.textContent = currentSentence;
        typingArea.value = '';
        typingArea.disabled = false;
        typingArea.focus();
        startTestBtn.disabled = true;
        resultsDiv.textContent = '';
        startTime = new Date().getTime();
    }

    function calculateResults() {
        const timeTakenSeconds = (new Date().getTime() - startTime) / 1000;
        const typedText = typingArea.value.trim();
        const wpm = (typedText.length / 5) / (timeTakenSeconds / 60);

        let correctChars = 0;
        const minLength = Math.min(typedText.length, currentSentence.length);
        for (let i = 0; i < minLength; i++) {
            if (typedText[i] === currentSentence[i]) {
                correctChars++;
            }
        }
        const accuracy = (currentSentence.length > 0) ? (correctChars / currentSentence.length) * 100 : 100;

        resultsDiv.innerHTML = `
            <p>დახარჯული დრო: <strong>${timeTakenSeconds.toFixed(2)}</strong> წამი</p>
            <p>სიტყვები წუთში (WPM): <strong>${wpm.toFixed(2)}</strong></p>
            <p>სიზუსტე: <strong>${accuracy.toFixed(2)}%</strong></p>
        `;

        typingArea.disabled = true;
        startTestBtn.disabled = false;
    }

    if (sentenceDisplay && typingArea && startTestBtn && resultsDiv) {
        startTestBtn.addEventListener('click', startTest);
        typingArea.addEventListener('input', function() {
            if (typingArea.value === currentSentence) {
                calculateResults();
            }
        });
    }
});