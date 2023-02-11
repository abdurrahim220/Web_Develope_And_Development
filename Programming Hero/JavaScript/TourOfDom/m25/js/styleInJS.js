const sections = document.querySelectorAll('section');

// console.log(sections);

for(const x of sections)
{
    // console.log(x.innerText);
    x.style.border = '2px solid steelblue';
    x.style.marginTop = '5px';
    x.style.borderRadius = '15px';
    x.style.paddingLeft = '7px';
    x.style.backgroundColor = 'lightGray';
}

const places = document.getElementById('places-container');

// places.style.backgroundColor = 'Yellow';
places.classList.add('yellow-bg');
places.classList.add('text-align');

places.classList.remove('large-text');