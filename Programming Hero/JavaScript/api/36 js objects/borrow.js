const kodomAli = {
    name: "kodom ali",
    money: 5000,
    study: "math",
    subjects: ['calculus', "algebra", 'geometry'],
    exam: function () {
        return this.name + ' is particapting in an exam';
        // console.log(this.name , 'is particapting in an exam!!');
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



const badamAli = {
    name: "kacha badam",
    money: 8000
}

const result2 = kodomAli.exam.call(badamAli);
// console.log(result2)
const badamMoney = kodomAli.treatDay.call(badamAli, 400, 40);
console.log(badamMoney);
const badamMoney2 = kodomAli.treatDay.apply(badamAli, [4000, 40]);
console.log(badamMoney2);

const badamAliTreat = kodomAli.treatDay.bind(badamAli);
const remaining = badamAliTreat(1000,100);
console.log(remaining);