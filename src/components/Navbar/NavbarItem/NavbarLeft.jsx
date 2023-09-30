import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {
  const navigate = useNavigate()
  return (
    <div onClick ={() => navigate("/")} className='text-3xl cursor-pointer'>
      ShopZone
    </div>
  )
}

export default NavbarLeft
