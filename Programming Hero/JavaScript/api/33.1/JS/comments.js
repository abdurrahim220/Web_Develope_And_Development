function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(data) {
    const comData = document.getElementById('div-container')
    for (const dt of data) {
        console.log(dt)
        const comDiv = document.createElement('div');
        comDiv.innerHTML = `
        <h3>id ${dt.postId}</h3>
        <h4>name: ${dt.name}</h4>
        <h5>Email: ${dt.email}</h5>
        <h6>Description: ${dt.body}</h6>

        `;
        comData.appendChild(comDiv);
    };

}