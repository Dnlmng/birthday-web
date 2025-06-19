/* ===== Countdown ===== */
    const eventDate = new Date("2025-07-20T17:00:00-05:00").getTime();
function updateCountdown() {
    const now = Date.now();
    const dist = eventDate - now;
    if (dist < 0) {
    document.getElementById("countdown").innerHTML = "<p>¡Ya comenzó la fiesta!</p>";
    clearInterval(timer);
    return;
    }
    const d = Math.floor(dist / 86400000);
    const h = Math.floor((dist % 86400000) / 3600000);
    const m = Math.floor((dist % 3600000) / 60000);
    const s = Math.floor((dist % 60000) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}
const timer = setInterval(updateCountdown, 1000);
updateCountdown();

    /* ===== FAQ toggle ===== */
    function toggleFAQ(el){el.classList.toggle('open');}