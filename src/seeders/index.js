const Roupa = require('../models/Roupa')

const up = () => {
    Roupa.create({
        image: '/images/roupa1.jpg',
        title: 'Roupa maneira',
        price: 250.00
    })

    Roupa.create({
        image: '/images/roupa2.jpg',
        title: 'Roupa maneira',
        price: 280.00
    })

    Roupa.create({
        image: '/images/roupa3.jpg',
        title: 'Roupa maneira',
        price: 240.00
    })
}

module.exports = { up }