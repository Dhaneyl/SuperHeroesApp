import {useMemo} from 'react'
import {useNavigate, Navigate ,useParams} from 'react-router-dom';
import { GetHeroById } from '../helpers/GetHeroById';

export const Hero = () => {

  const {id} = useParams('');
  const navigate = useNavigate()

  const onReturn = () =>{
    navigate(-1)
  }

  const hero = useMemo(()=> GetHeroById (id), [id]) 
  if (!hero) {
    return <> 
    <Navigate to='/search'/>
    </>
  }
  
  return (
    <div className='row mt-5 animate__animated animate__fadeInLeft animate__delay-0.5s'>
      <div className='col-4'>

      <img 
        src={`/assets/heroes/heroes/${id}.jpg`}
        alt = {hero.superhero}
        className='img-thumbnail '
      />
      </div>

      <div className='col-8'>
        <h3>{hero.superhero}</h3>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter Ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'><b>Fist Appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-outline-info'
        onClick={onReturn}>
          Back
        </button>
      </div>
    </div>
  )
}
