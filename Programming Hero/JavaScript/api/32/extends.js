class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedbakc() {
        console.log(`${this.name} thank your for your feedback`)
    };

}
class Instructor extends TeamMember {
   
    designamtion = 'web Course Instructor'
    team = 'web team'
   
    constructor(name, location) {
        super(name, location);
    };
    startSupportSession(time) {
        console.log(`start the suport session at ${time}`)
    };
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    };

}
class Developer {

    designation = 'web Course Instructor'
    team = 'web team'

    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    };
    develoerFeature(feature) {
        console.log(`Please develop the ${feature}`)
    };
    release(version) {
        console.log(`please release the version ${version}`)
    };
    provideFeedbakc() {
        console.log(`${this.name} thank your for your feedback`)
    };
}
class JobPlacement {

    designation = 'Job Placement Commandos'
    team = 'web team'

    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    };
    develoerFeature(feature) {
        console.log(`Please develop the ${feature}`)
    };
    release(version) {
        console.log(`please release the version ${version}`)
    };
    provideFeedbakc() {
        console.log(`${this.name} thank your for your feedback`)
    };
}


const alia = new Developer('alia bhatt', 'dhaka', 'React');
console.log(alia)