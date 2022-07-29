import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { GetHeroByName } from '../helpers/GetHeroByName';

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} =  queryString.parse(location.search);
  const heroes = GetHeroByName(q);

   const showSearch = (q.length === 0);
   const showError = (q.length > 0) && heroes.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if (searchText.trim().length <= 1) return ;

    navigate(`?q=${searchText}`);
  } 
  return (
    <>
      <h1>Search</h1>
    <hr/>

    <div className='row'>

    <div className='col-5'>
      <h5>Start searching</h5>
      <hr/>
      <form onSubmit={onSearchSubmit}>
      <input 
      className='form-control'
      type='text'
      placeholder= 'search a hero'
      name='searchText'
      autoComplete="off"
      value={searchText}
      onChange={onInputChange}
      />
      <button className='btn btn-outline-info mt-3'> Search </button>
      </form>

    </div>
    <div className='col-7'>
      <h4> Results</h4>
      <hr/>
      <div className='alert alert-info animate__animated animate__fadeIn' 
      style={{display: showSearch ? '' : 'none'}}> Searching hero</div>

      <div className='alert alert-danger animate__animated animate__fadeIn' 
      style={{display: showError ? '' : 'none'}}> <b> {q} </b>not found</div>
      
      {
      heroes.map( hero => (
        <HeroCard key={hero.id} {...hero}/>
      ))
     }
     </div>
    
    </div>

   
    </>
  
  )
}
