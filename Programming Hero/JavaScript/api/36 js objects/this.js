// console.log(this)

const kodomAli = {
    name: "kodom ali",
    money: 5000,
    study: "math",
    subjects: ['calculus', "algebra", 'geometry'],
    exam: function () {
        console.log(this);
        return this.name + ' is particapting in an exam';
        // console.log(this.name , 'is particapting in an exam!!');
    },
    examArrow: () => {
        console.log(this)
    },
    examNested: () => {
        const arrow = () => {
            console.log(this)
        }
        console.log(arrow)
    },
    improve: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}!!`;
    },
    treatDay: function (amount, tips = 0) {
        this.money = this.money - amount - tips;
        return this.money;
    }
};

kodomAli.exam();

const badamAli = {
    name: "kacha badam",
    money: 8000
}

badamAli.exam = kodomAli.exam;
badamAli.exam();


function clickHandler(){
    console.log('inside click handler',this);
};

document.getElementById('btn-click').addEventListener('click',function(){
    console.log(this);
})