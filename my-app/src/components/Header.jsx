import React from 'react'
import logo from '../assets/images/LOGO.png'
//import Nav from './Nav'
import '../style/Header.css'

export default function Header() {
  return (
		<header className="headerWrap">
			<figure className='headerWrap__fig'>
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</figure>
		</header>
	)
}