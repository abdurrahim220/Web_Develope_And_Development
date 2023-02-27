

const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data, dataLimit);
    // console.log(data.data);
}

const displayPhones = (phones, dataLimit) => {
    console.log(phones)

    const phonesContainer = document.getElementById('phones-contianer');
    phonesContainer.innerText = '';

    const showAll = document.getElementById('show-all')

    // display 20 phone
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }


    // display no phone on wrong search
    const noPhone = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none');
    }

    // display all phone
    phones.forEach(phone => {

        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="col">
                <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                </div>
                </div>
            </div>
        `;
        phonesContainer.appendChild(phoneDiv)
    });
    // stop loader
    toggleSpiner(false);

};


// details button to show modal navbar
const loadPhoneDetails = async (id) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`

    const res = await fetch(url)
    const data = await res.json()
    displayPhonesDetails(data.data)
};
// phone details showing to navbar modal

const displayPhonesDetails = phone => {
    console.log(phone)

    const modalTitle= document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText= phone.name;
    document.getElementById('phone-dob').innerHTML = `
    <p>Release Date: ${phone.releaseDate ? phone.releaseDate : "No release Date Found!!"}</p>
    <p>Others : ${phone.others ? phone.others.Bluetooth : "no Other details avaiable"}</p>
    `}
const processSearch = (dataLimit) => {
    toggleSpiner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit)
}

// handle search btn click
document.getElementById('btn-search').addEventListener('click', function () {
    // start loader
    // toggleSpiner(true);
    // const searchField = document.getElementById('search-field');
    // const searchText = searchField.value;
    // loadPhones(searchText)
    processSearch(10);
});

document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10);
    }
})

const toggleSpiner = isLoading => {
    const LoaderSection = document.getElementById('loader');


    if (isLoading) {
        LoaderSection.classList.remove('d-none');
    }
    else {
        LoaderSection.classList.add('d-none');
    }
}



// not the best way to load show all

document.getElementById('btn-show-all').addEventListener('click', function () {
    // toggleSpiner(true);
    // const searchField = document.getElementById('search-field');
    // const searchText = searchField.value;
    // loadPhones(searchText)
    processSearch();
});



// loadPhones();