

function checkAge() {
    // console.log('button');

    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errTag = document.getElementById('error');

    try {
        // console.log(bBaria);
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw ("age not found");
        }
        else if (age < 18) {
            throw ('baccha kachha not allow');
        }
        errTag.innerText = ''
    }
    catch (er) {
        console.log("error", er);
        errTag.innerText = 'Error:' + er;

    }
    finally {
        console.log('All done inside try catch');

    }
    console.log(111111);
}