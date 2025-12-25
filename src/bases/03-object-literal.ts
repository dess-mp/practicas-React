interface Person {
    name: string;
    lastName: string;
    age: number;
    adress: Address;
}

interface Address {
    street: string;
    number: number;
}

const ironman: Person = {
    name : 'Desiree',
    lastName: 'Moya',
    age: 22,
    adress: {
        street: 'Main St',
        number: 123
    }
}

// const spiderman = structuredClone( ironman ); // crea una copia profunda del objeto, incluyendo objetos anidados

// spiderman.name = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 30;

console.log( ironman );