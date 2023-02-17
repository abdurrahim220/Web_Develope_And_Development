// for first Card
document.getElementById("first-card").addEventListener('click', function (e) {
    const productName = document.getElementById("first-name").innerText;
    // console.log(firstElement.innerText);
    // get the data from htm using id
    const productPrice = document.getElementById("first-price").innerText;
    const productQuantity = document.getElementById("first-quantity").
        innerText;

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    console.log(productName, productPrice, productQuantity, priceTotal);

    // show the data

    // const container =document.getElementById('table-container');
    // const tr = document.createElement('tr');
    // tr.innerHTML = `
    // <td>${1}</td>
    // <td>${productName}</td>
    // <td>${productPrice}</td>
    // <td>${productQuantity}</td>
    // <td>${priceTotal}</td>
    // `;
    // container.appendChild(tr);

    displayData(productName,productPrice,productQuantity,priceTotal)
});


// secnd card

document.getElementById('second-card').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[3].innerText)
    const pN = e.target.parentNode.parentNode.children[0].innerText;
    const pP = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQ = e.target.parentNode.parentNode.children[3].children[0].innerText;
    // console.log(pN,pP,pQ)
    const sT = parseInt(pP) + parseInt(pQ);
    displayData(pN,pP,pQ,sT);
});

// for third Card
document.getElementById("third-card").addEventListener('click', function (e) {
    const productName = document.getElementById("third-name").innerText;
    // console.log(firstElement.innerText);
    // get the data from htm using id
    const productPrice = document.getElementById("third-price").innerText;
    const productQuantity = document.getElementById("third-quantity").
        innerText;

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    console.log(productName, productPrice, productQuantity, priceTotal);

    // show the data

    // const container =document.getElementById('table-container');
    // const tr = document.createElement('tr');
    // tr.innerHTML = `
    // <td>${1}</td>
    // <td>${productName}</td>
    // <td>${productPrice}</td>
    // <td>${productQuantity}</td>
    // <td>${priceTotal}</td>
    // `;
    // container.appendChild(tr);

    displayData(productName,productPrice,productQuantity,priceTotal)
});

// five div last card
document.getElementById('last-card').addEventListener('click',function(){
    const pN = document.getElementById('last-name').innerText;
    const pP = document.getElementById('first-value').value;
    const pQ = document.getElementById('last-value').value;

    const sT = parseInt(pP) % parseInt(pQ);

    displayData(pN,pP,pQ,sT);



});


// function showing data
function displayData(productName,productPrice,productQuantity,priceTotal) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    container.appendChild(tr);
}

// comoon display function

function getAllData()
{
    const productName = document.getElementById("third-name").innerText;
    const productPrice = document.getElementById("third-price").innerText;
    const productQuantity = document.getElementById("third-quantity").
        innerText;
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
}


function disableButton(id){
    
}