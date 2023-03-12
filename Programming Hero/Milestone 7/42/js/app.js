
const showAlert = () => {
    alert("This is alert");
}

const lendMoney = () => {
    const result = confirm("Taka ki dhar dibe tue!");
    console.log(result);
    if (result == true) alert("Tue amar jan er dosto!!");
    else console.log("DGM .... toka ajke e block maira dimu");
}



const getInfo = () => {
    // alert
    // conform
    const name = prompt("Tell me Your name");
    console.log(name);
    if (name === null) {
        alert("name na dile kaam nai! ja foot")

    }
    else console.log(name, 'welcome to summer season');
}