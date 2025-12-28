function useState(stringInicial:string){
    return[
        stringInicial,
        (stringSecundario:string)=>{ console.log(stringSecundario) }
    ] as const;
}

const [stringInicial, stringSecundario] = useState('Goku');

console.log(stringInicial);   
stringSecundario('Vegeta');      