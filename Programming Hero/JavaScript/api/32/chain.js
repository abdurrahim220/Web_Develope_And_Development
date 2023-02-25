const users = [
    { id: 1, name: "abul", job: "doctor" }
]

// console.log(users[0].name)

const data = {
    count: 5000,
    data: [
        { id: 1, name: "babul", job: 'leader' },
        { id: 2, name: "dabul", job: 'leader' },
    ]
}

const first = data.data[0].job;
// console.log(first)

const user = {
    id: 5000,
    name: "thomas alba lane",
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: "Right side"
        },
        postOffice: 'cantonment',
        city: 'dhaka'
    }
}

const userFloor = user.address?.street?.second;
console.log(userFloor);