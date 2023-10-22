import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import { Suspense } from 'react'
import './styles/index.scss'

import { MainAsync } from './pages/MainPage/async'
import { AboutAsync } from './pages/AboutPage/async'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'


const App = () => {



const {theme, toggleTheme} = useTheme()
	

  return (
	<div className={classNames('app', {[theme]: true}, [])}>
		<Link to='/'>Главная</Link>
		<Link to='/abount'>О</Link>
		<button onClick={toggleTheme}>Change theme</button>
		<Suspense fallback={<div>...loading</div>}>
<Routes>
			<Route path='abount' element={<AboutAsync />}/>
			<Route path='' element={<MainAsync/>}/>
		</Routes>
		</Suspense>
		
	</div>
  )
}

export default App