$(function() {
    const timer1 = $(".header .action__timer").FlipClock({
        clockFace: "DailyCounter",
        language: "ru"
    });
    timer1.setTime(86400);
    timer1.setCountdown(true);
    timer1.start();

    const timer2 = $(".capture .action__timer").FlipClock({
        clockFace: "DailyCounter",
        language: "ru"
    });
    timer2.setTime(86400);
    timer2.setCountdown(true);
    timer2.start();

    const timer3 = $(".event .action__timer").FlipClock({
        clockFace: "DailyCounter",
        language: "ru"
    });
    timer3.setTime(86400);
    timer3.setCountdown(true);
    timer3.start();
});