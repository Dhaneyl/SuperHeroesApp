import { heroes } from "../data/Hero";



export const GetHeroByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

//   To throw an error if the publisher does not exit
    if(!validPublisher.includes(publisher)) {
        throw new Error ( `${publisher} does not exit`);
    }
// If the hero exists

   return heroes.filter(heroe => heroe.publisher === publisher );
}
