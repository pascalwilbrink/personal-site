var app = document.querySelector('h1.type');
var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});
typewriter
    .pauseFor(50)
    .typeString('I\'m a Java')
    .pauseFor(280)
    .deleteChars(4)
    .typeString('full-stack Java developer')
    .pauseFor(760)
    .deleteChars('full-stack Java developer'.length)
    .typeString('<strong>Software</strong> developer')
    .pauseFor(30000)
    .start();
var animateCounter = function (counter) {
    var value = Number(counter.getAttribute('data-count-number'));
    var increment = Number(counter.getAttribute('data-count-increment')) || 1;
    var duration = Number(counter.getAttribute('data-count-duration')) || 6000;
    if (value) {
        anime({
            targets: counter,
            textContent: value,
            round: increment ? 1 / increment : 1 / 5,
            easing: 'easeInOutQuad',
            duration: duration
        });
    }
};
var counters = document.querySelectorAll('.counter');
counters.forEach(function (counter) {
    animateCounter(counter);
});
fetch('https://api.github.com/users/pascalwilbrink/events')
    .then(function (res) {
    return res.json();
}).then(function (res) {
    var pushEvents = res.filter(function (item) { return item.type === 'PushEvent'; });
    var commitCounter = document.querySelector('.counter__commits');
    commitCounter.setAttribute('data-count-number', pushEvents.length.toString());
    animateCounter(commitCounter);
});
var calculateCodedHours = function () {
    var yearsWorked = 7;
    var workedDaysInYear = 200;
    var codedHours = 8 * (workedDaysInYear * yearsWorked);
    var codedHoursCounter = document.querySelector('.counter__coded-hours');
    codedHoursCounter.setAttribute('data-count-number', codedHours.toString());
    animateCounter(codedHoursCounter);
};
calculateCodedHours();
