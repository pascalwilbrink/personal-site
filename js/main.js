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
