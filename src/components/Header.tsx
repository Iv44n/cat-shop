'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const path = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const headerClass = `w-full p-8 flex flex-col sm:flex-row items-center justify-between lg:px-40 absolute z-20 ${
    path === '/' ? 'text-white' : 'text-black'
  } ${isMenuOpen ? 'backdrop-blur-3xl h-screen' : ''}`

  const navClass = `w-full sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:block`

  return (
    <header className={headerClass}>
      <div className='flex items-center justify-between w-full sm:w-fit'>
        <Link href='/' className='text-2xl font-bold'>
          Pet Vital Cats
        </Link>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-5 sm:hidden'>
            <Link href='/login'>
              Login
            </Link>
            <div>Cart</div>
          </div>
          <button
            className='sm:hidden text-xl'
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>
      <nav className={navClass}>
        <ul className='flex flex-col sm:flex-row items-center gap-10'>
          <li>
            <NavLink href='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink href='/about'>Nosotros</NavLink>
          </li>
          <li>
            <NavLink href='/care'>Crianza</NavLink>
          </li>
          <li>
            <NavLink href='/breeds'>Razas</NavLink>
          </li>
          <li>
            <NavLink href='/contact'>Contacto</NavLink>
          </li>
        </ul>
      </nav>
      <div className='items-center gap-5 mt-4 sm:mt-0 hidden sm:flex'>
        <Link href='/login'>
          Login
        </Link>
        <div>Cart</div>
      </div>
    </header>
  )
}
