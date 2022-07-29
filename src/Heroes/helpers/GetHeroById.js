import { heroes } from "../data/Hero"


export const GetHeroById = (id) =>{
    
 return  heroes.find(hero => hero.id === id);
}