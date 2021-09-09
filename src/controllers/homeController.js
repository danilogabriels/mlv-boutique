const Roupa = require('../models/Roupa')

const index = (req, res) => {
    const roupas = Roupa.readAll()

    res.render('home/index.njk', { roupas })
}

module.exports = { index }