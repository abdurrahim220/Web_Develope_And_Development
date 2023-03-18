
const img = ['img-1.jpg','img-2.jpg','img-3.jpg','img-4.jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg','https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'];

const imgEl = document.getElementById("imgEl");

let indexOf = 0;
setInterval(() => {
    if(indexOf === img.length)
    {
        indexOf = 0;
    }
    const imgUrl = img[indexOf];
    imgEl.setAttribute('src',imgUrl);
    indexOf ++;
    
}, 1000);