import { heroes, type Hero } from "../data/heroes.data";

export function getHeroesByOwner(Owner: string): Hero[] {

    const filteredHeroes = heroes.filter( (hero) => hero.owner === Owner )

    return filteredHeroes;
}

