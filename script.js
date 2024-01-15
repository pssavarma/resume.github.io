var greetingElement = document.getElementById('greeting');

var typewriter = new Typewriter(greetingElement, {
    loop: true
});

typewriter
    .typeString('Hello! I am Aditya.👋')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Hallo! Ich bin Aditya.👋')
    .pauseFor(1000)
    .deleteAll()
    .typeString('నమస్కారం నా పేరు ఆదిత్య! 🙏')
    .pauseFor(1000)
    .deleteAll()
    .typeString('¡Hola! mi nombre es aditya.👋')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Bonjour! je m\'appelle Aditya.👋')
    .pauseFor(1000)
    .deleteAll()
    .typeString('こんにちは！私の名前はアディティアです。')
    .pauseFor(1000)
    .deleteAll()
    .typeString('हेलो मेरा नाम आदित्य है! 🙏')
    .pauseFor(1000)
    .deleteAll()
    .typeString('olá! meu nome é aditya.👋')
    .pauseFor(1000)
    .deleteAll()
    .typeString('привет! меня зовут Адитья.👋')
    .pauseFor(1000)
    .deleteAll()
    .typeString('مرحبًا! اسمي أديتيا.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('안녕하세요! 내 이름은 아디트야야.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Ciao! il mio nome è aditya.👋')
    .pauseFor(1000)
    .deleteAll()
    .typeString('你好！我的名字是阿迪亚。')
    .pauseFor(1000)
    .deleteAll()
    .start();

function Introduction(){
    window.location.href = "about.html#about";
}

function education(){
    window.location.href = "about.html#education";
}

function scrollToEducation(){
    var edSection = document.getElementById("education");
        if (edSection) {
            edSection.scrollIntoView({ behavior: "smooth" });
        }
}

function experience(){
    window.location.href = "about.html#experiences";
}
function scrollToExperience(){
    var expSection = document.getElementById("experiences");
        if (expSection) {
            expSection.scrollIntoView({ behavior: "smooth" });
        }
}

function projects(){
    window.location.href = "about.html#projects";
}
function scrollToProjects(){
    var prSection = document.getElementById("projects");
        if (prSection) {
            prSection.scrollIntoView({ behavior: "smooth" });
        }
}

function Programming(){
    window.location.href = "skills.html#Programming";
}

function Tools(){
    window.location.href = "Facts.html#Tools";
}

function OtherSkills(){
    window.location.href = "Facts.html#Others";
}

function contactme(){
    window.location.href = "contact.html"
}

function languages(){
    window.location.href = "about.html#languages";
}

function scrollToLanguages(){
    var lgSection = document.getElementById("languages");
        if (lgSection) {
            lgSection.scrollIntoView({ behavior: "smooth" });
        }
}

function AboutTheSite(){
    window.location.href = "website.html";
}