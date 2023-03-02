function greeting(greetingHandler,name) {
    // console.log(person);
    greetingHandler(name)
}

// const name = 'halim'

// const number =[45,54,78];

function greetingHandler(name){
    console.log('Good Morning',name);
}


greeting(greetingHandler,'Tom Hanks');
greeting(greetingHandler,'Tom bredy');
