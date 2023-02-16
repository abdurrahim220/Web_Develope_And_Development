// console.log("connected!")

document.getElementById('add-btn').addEventListener('click', function () {
    // console.log("hello!")
    const value = document.getElementById('text-input').value;
    // console.log(value);

    // list showing 

    const container = document.getElementById('parent-container');

    const li = document.createElement('li');

    li.innerText = value;
    // adding class name or id name in appned child or attribute 

    li.classList.add('new-li');
    container.appendChild(li);

    const allList = document.getElementsByClassName('new-li');
    for (const item of allList) {
        // console.log(item);
        item.addEventListener('click', function (e) {
            // console.log(e.target);
            // console.log(e.target.parentNode);
            // console.log('hello');

            // removing list 
            e.target.parentNode.removeChild(e.target);
        });
    };
});

/* 

// document.getElementById('p-1').innerText = "Bangladesh"
// document.getElementById('p-2').innerText = "Bangladesh"
// document.getElementById('p-3').innerText = "Bangladesh"
// document.getElementById('p-4').innerText = "Bangladesh"*/

document.getElementById('btn').addEventListener('click', function () {
    // document.getElementById('p-1').innerText = "Bangladesh";
    // document.getElementById('p-2').innerText = "Bangladesh";
    // document.getElementById('p-3').innerText = "Bangladesh";
    // document.getElementById('p-4').innerText = "Bangladesh";

    // calling function
    setInnerText("p-1","Bangladesh");
    setInnerText("p-2","China");
    setInnerText("p-3","Pakistan");
    setInnerText("p-4","India");

    const inputValue = getInputValue("text-input");
    console.log(inputValue);
});

// function
setInnerText = (id,value) => document.getElementById(id).innerText=value;
// setInnerText = (id) => document.getElementById(id).innerText="Bangladesh";


getInputValue = () => {
    const value = document.getElementById(id).value;
    return value;
}