
// const hello = localStorage.getItem('hello');
// console.log(hello);


const setItem = () => {
    const age = prompt("Enter name: ");
    const value = prompt("Enter age: ");
    
    localStorage.setItem(age, value);
}

const getItem = (value) => {
    document.getElementById('div').innerHTML = `
    <p>${localStorage.getItem("rahim")}</p>
    `;
}