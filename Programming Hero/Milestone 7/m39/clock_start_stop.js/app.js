
document.getElementById('start').addEventListener('click', function () {
    // console.log("button click");
    let count = 0;
    const intervalId = setInterval(() => {
        console.log(count++)
    });

    document.getElementById('time_counter').innerText = intervalId;
})


// stop button click

document.getElementById('stop').addEventListener('click',function(){
    
})