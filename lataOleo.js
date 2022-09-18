alert('Volume de uma lata de óleo no ar!')
const raio = Number(prompt('Entre com o raio da lata:'))
const altura = Number(prompt('Entre com a altura da lata:'))
const area = (raio ** 2) * 3.14
const volume = area * altura
console.log(volume)