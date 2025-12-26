function greet( name: string ): string {
    return `Hola ${name}`;
};


const greet2 = (name: string) => `Hola ${name}`;

const message = greet('Dess');
const message2 = greet2('Dess Moya');

console.log( message );
console.log( message2 );

interface User {
    uid: string;
    username: string;
}

function getUser1(): User {
    return {    
        uid : 'DMP-123',
        username: 'DessMoya',
    };
};

const getUser2 = () => ({
    uid : 'LNT-456',
    username: 'LeandroNicolasTonello',
});

const user = getUser1();
const user2 = getUser2();

console.log( user );
console.log( user2 );

const myNumber:number [] = [1,2,3,4,5];

// FUNCIÓN ANÓNIMA
myNumber.forEach(function (value) {
    console.log( value );
})

// FUNCIÓN FLECHA
myNumber.forEach( (value) => {
    console.log( value );
})

// FUNCIÓN FLECHA SIMPLIFICADA
myNumber.forEach(console.log);