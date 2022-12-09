//Asynchronous Programming 
//AJAX = Asynchronous JavaScript And XML
//Get data without loading the page

document.getElementById('get_data').addEventListener(`click`,loadData);

function loadData() {
    // console.log("Button clicked");
    //?Create XHR object (XML Http Request)
    let xhr  = new XMLHttpRequest();

    xhr.open("GET",'data.txt',true);

    xhr.onprogress = function() {
        console.log(xhr.readyState);
    }


     xhr.onload = function(){
        //?HTTP Statuses
        //?200: ok
        //?403:"Forbidden"
        //?404:"Not found"
        if(this.status == 200)

        {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h4?>${this.responseText}</h4?`
        }
    }

    /*
    xhr.onreadystatechange = function() {

        //?readystate values
        //?0: request not initialized
        //?1: server connection established
        //?2:request received
        //?3:processing request
        //?4:request finished and response is ready


        if(this.status === 200 && this.readyState === 4)
        {
            console.log(this.responseText);
        }
    } */

    xhr.send();
    console.log(xhr);

    //?Open Function 
}