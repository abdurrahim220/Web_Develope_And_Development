// syntactic suger

class Instructor {
    name;
    designamtion = 'web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the suport session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}

const amir = new Instructor();
console.log(amir);

amir.startSupportSession('9.00');
amir.createQuiz(60);

const dd = new Instructor('rahim', 'dhaka');
console.log(dd);