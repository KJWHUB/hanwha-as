'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      <li className="mouse-point">
        <Image src="/images/content/common/ico-website.svg" width={25} height={25} alt="지구본" />
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
