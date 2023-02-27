
const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}


const displayUser = (user) => {

    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    const fullName = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = fullName;
    const address = user.results[0].location.city + ' ' + user.results[0].location.street.name + ' ' + user.results[0].location.street.number;
    document.getElementById('address').innerHTML = address;
    // const pic = user.results[0].picture.large;
    // document.getElementById('pic').innerHTML = pic;// how to get img url go to support seasion
    console.log(user.results[0].picture.large);
}

loadUser();