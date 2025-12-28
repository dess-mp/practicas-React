const person = { // objeto literal, sólo datos
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

const { name: heroName, age, key } = person; // Person es alias, se guardan sólo las propiedades que se necesitan en un objeto nuevo

console.log({ heroName, age, key }); // El objeto person no se toca, sólo se extraen sus propiedades

interface Hero { // Contrato mental para los objetos tipo héroe que cumplan con estas propiedades
    name: string;
    age: number;
    key: string;
    rank?: string; 
}

const mapHeroData = ({name, age, rank, key}: Hero) => { // Función que recibe un objeto, se exige que cumpla con el contrato Hero y se desestructura en los parámetros
    return { // Retorna un nuevo objeto con las propiedades desestructuradas
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    }
}

const {
    rank, 
    keyName, 
    user
} = mapHeroData(person); 

const { name } = user;

console.log({rank, keyName, name}); 
