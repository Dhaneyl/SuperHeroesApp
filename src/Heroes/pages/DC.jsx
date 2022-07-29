import React from 'react'
import { HeroList } from '../components'


export const DC = () => {
  return <>
    <h1 className='text-center'>DC Comics Super Heroes</h1>
    <hr/>

    <HeroList publisher='DC Comics'/>
  </>
}
