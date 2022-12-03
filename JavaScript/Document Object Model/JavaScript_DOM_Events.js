//Events of JavaScript

//OnClick
//Event Listener

// function message(){
//     console.log("Mouse over button!!!");
// }
// document.getElementById('sample-button').addEventListener('click',message);


// document.querySelector('.container').addEventListener('mouseover',message);


// document.querySelector('.container').style.background = "red";
/*
function message(e)
{
    let val = e;
    // console.log("Button Clicked")
    val = e.target;
    val = e.target.id;
    val = e.timeStamp;
    val = e.type;
    val = e.clientY;
    val = e.offsetY;
    val = e.offsetX;

    val = this;
    // console.log(val);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(val);

    this.style.background = `# ${e.offsetX}`
}*/

document.querySelector('#name').addEventListener('focus',test);
document.querySelector('#name').addEventListener('keyup',test2);

function test(e)
{
    // console.log("focused!!");
    this.style.background = "red";
}

function test2(e)
{
    // console.log(this.value);
    document.getElementById("demo").innerText = this.value;
}