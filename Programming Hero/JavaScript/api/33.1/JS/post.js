function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayData(data))
}

/*
1.get the container element where you want to add new element
2.create child element
3.set innerHtml/text
4.apppendChild

*/
function displayData(data){
    const postContainer = document.getElementById('post-container');
    for(const post of data){
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post :${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        ` ;   
        postContainer.appendChild(postDiv);
    }
}