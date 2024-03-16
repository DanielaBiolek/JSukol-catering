const justFood = (numberOfPeople) => {
    const pricePerPerson = 250
    const totalPrice = numberOfPeople * pricePerPerson

    return `catering od Just Food pro ${numberOfPeople} lidí je za ${totalPrice} Kč.`
}

const yourMama = (numberOfPeople) => {
    const pricePerPerson = 500
    const totalPrice = numberOfPeople * pricePerPerson

    return `catering od YourMama pro ${numberOfPeople} lidí je za ${totalPrice} Kč.`
}

const flavourHeaven = (numberOfPeople) => {
    const pricePerPerson = 1000
    const totalPrice = numberOfPeople * pricePerPerson

    return `catering od Flavour Heaven pro ${numberOfPeople} lidí je za ${totalPrice} Kč.`
}

console.log((justFood(10)))
console.log((yourMama(10)))
console.log((flavourHeaven(10)))


const createEvent = (eventName, numberOfPeople, foodPriceFunction, justFood, yourMama, flavourHeaven) => {

    return `Událost "${eventName}" s ${foodPriceFunction(numberOfPeople)}`
}

console.log(createEvent('Czechitas party', 50, flavourHeaven))