import logo from '../assets/img/Logotipo_empresa_de_programação_sistemas_e_tecnologia-removebg-preview.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './Button'

import './Sidebar.scss'

const SideBar = () => {
  const navigate = useNavigate()

  const handleSignOutInClick = () => {
    navigate('/login')
  }

  return (
    <div className='sidebar-container'>
      <div className='logo'>
        <img className='logo' src={logo} alt='Logo Waldston Santana' />
      </div>

      <div className='signout'>
        <Button onClick={handleSignOutInClick}>Sair</Button>
      </div>
    </div>
  )
}

export default SideBar
