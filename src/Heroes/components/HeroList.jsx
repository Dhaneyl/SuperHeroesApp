import { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { GetHeroByPublisher } from '../helpers/GetHeroByPublisher';




export const HeroList = ({publisher}) => {
    const heroes = useMemo(()=> GetHeroByPublisher(publisher), [publisher])
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>

    { 
      heroes.map(hero=>{
       return  <HeroCard 
          key={hero.id}
          {...hero}
        />
    })
    
    }

    </div>
  )
}
