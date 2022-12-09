
//https://www.icndb.com/api/

document.getElementById('get_data').addEventListener('click',loadjokes);

function loadjokes() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://www.icndb.com/api/',true)

    xhr.onload = function() {
        if(this.status == 200)
        {
            console.log(this.responseText);
        }
    }
    xhr.send();
}