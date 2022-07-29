import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import {  HeroesRoutes } from '../Heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'



export const AppRouter = () => {
  return (
   <>
   
    <Routes>

        <Route path='login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }/> 

        <Route path='/*' element= {
          <PrivateRoute> 
          <HeroesRoutes />
          </PrivateRoute>
        } />
         {/* <Route path="/*" element={<HeroesRoutes />} /> */}
         {/* <Route path="login" element={<Login />} /> */}
      </Routes>
   </>
  )
}