'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import classNames from 'classnames'

import HeaderRrightMenu from '@/components/Menu/HeaderRrightMenu.tsx'
import { MainMenuType } from '@/types/menu'

import header from './header.module.scss'

const menuData = [
  { text: 'Who We Are', id: 'MENU-001', path: '/whoweare', down: [] },
  {
    path: '/whyweexist',
    text: 'Why We Exist',
    id: 'MENU-002',
    down: [],
  },
  { down: [], path: '/whatwedo', text: 'What We Do', id: 'MENU-003' },
  { path: '/ir', text: 'IR', id: 'MENU-004', down: [] },
  { text: 'media', id: 'MENU-005', down: [], path: '/media' },
  { text: 'esg', id: 'MENU-006', path: '/esg', down: [] },
  { down: [], id: 'MENU-007', path: '/careers', text: 'careers' },
]

export default function MainHeader() {
  const [isHover, setIsHover] = useState(false)

  const handleOver = () => {
    setIsHover(true)
  }

  const handleOut = () => {
    setIsHover(false)
  }

  return (
    <header className={classNames(header.header, isHover ? header.active : '')}>
      <Link href="/">
        <Image
          src="/images/content/common/d-logo.svg"
          width={272}
          height={48}
          alt="logo"
          priority
        />
      </Link>

      <nav
        className={header.mainMenuWrap}
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        onFocus={handleOver}
        onBlur={handleOver}
      >
        {menuData.map((el: MainMenuType, idx: number) => (
          <div className={`${header.depth0} btn3-en`} key={idx}>
            <Link href={el.path} className={header.linkHeaderWhite}>
              {el.text}
            </Link>
          </div>
        ))}
      </nav>

      <HeaderRrightMenu />
    </header>
  )
}
