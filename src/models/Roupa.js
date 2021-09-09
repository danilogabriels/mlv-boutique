let key = 1
const roupas = []

const create = values => {
    const roupa = { id: key++, ...values }
    roupas.push(roupa)

    return roupa
}

const readAll = () => {
    return roupas
}

module.exports = { create, readAll }