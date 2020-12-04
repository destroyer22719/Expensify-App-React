// const person = {
//   name: 'Nathan',
//   age: 16,
//   location: {
//     city: 'Toronto',
//     temp: 10,
//   }
// }

// const {name, age} = person;
// const {temp, city} = person.location;
// console.log(`${name} is ${age}`);
// console.log(`${temp} in ${city}`);

// const address = ['1299 random Street', 'random city', 'random state', 'random postal code'];

// const [street, city, state, zip] = address

// console.log(`You are in ${street} and in the city of ${city}`)

const coffee = ['Coffee', '$1','$2','$3'];

const [item,,price] = coffee;
console.log(`A medium ${item} costs ${price}`)