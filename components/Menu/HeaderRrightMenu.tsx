'use client';

import { useState } from 'react';
import Link from 'next/link';
import WebsiteIcon from '@/components/Icon/WebsiteIcon.tsx';
import BurgerMenu from './BurgerMenu.tsx';

import style from './headerRrightMenu.module.scss';

export default function HeaderRrightMenu() {
  const [ulHover, setUlHover] = useState(false);

  const handleMouseOverUl = () => {
    setUlHover(true);
  };

  const handleMouseOutUl = () => {
    setUlHover(false);
  };

  const ulClassName = `${style.iconWrap} ${ulHover ? style.atv : ''}`;

  return (
    <ul
      className={ulClassName}
      onMouseOver={handleMouseOverUl}
      onMouseOut={handleMouseOutUl}
      onFocus={handleMouseOverUl}
      onBlur={handleMouseOverUl}
    >
      <li>
        <WebsiteIcon />
      </li>
      <li>
        <Link href="/">방문신청</Link>
      </li>
      <li>
        <BurgerMenu />
      </li>
    </ul>
  );
}
