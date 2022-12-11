const x = '10'

if (!Number.isInteger(x)) {
    throw new Error('o valor de x não é inteiro!')
}

console.log('continuação do código')