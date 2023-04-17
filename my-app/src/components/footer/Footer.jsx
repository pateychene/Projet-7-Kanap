///import React from 'react'
import './Footer.css'
import logoFooter from '../../assets/images/logofooter.svg'


function Footer(){
  return (
      <footer>
      <img src={logoFooter} alt="logo de l'agence kaza"></img>
      <h2> ©2020 Kasa. All right reserved.</h2>
      </footer>
    )
}
export default Footer
