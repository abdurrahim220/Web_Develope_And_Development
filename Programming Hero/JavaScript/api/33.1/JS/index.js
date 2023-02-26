function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    // console.log(data);
    // for(const x of data)
    // {
    //     console.log(x.name);
    // }

    const ul = document.getElementById("user-list");
    for(const x of data)
    {
        // console.log(x.name);
        const li = document.createElement('li');
        li.innerText = x.name;
        ul.appendChild(li);
    }
}