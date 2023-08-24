import Link from 'next/link';

import menuApi from '@/services/module/menu/index.ts';
import { MainMenuType } from '@/types/menu/index.ts';
import BurgerMenu from '../Menu/BurgerMenu.tsx';
import header from './header.module.scss';

export default async function MainHeader() {
  const response = await menuApi.getMenuList();

  return (
    <header className={header.header}>
      <Link href="/">
        <img src="/images/content/common/d-logo.svg" alt="" />
      </Link>
      <nav className={header.mainMenuWrap}>
        {response.map((el: MainMenuType, idx: number) => (
          <div className={`${header.depth0} btn3-en`} key={idx}>
            <Link href={el.path} className={header.linkHeaderWhite}>
              {el.text}
            </Link>
          </div>
        ))}
      </nav>

      <ul className={header.iconWrap}>
        <li>
          <img src="/images/content/common/ico-website.svg" alt="" />
        </li>
        <li>
          <Link href="/">방문 신청</Link>
        </li>
        <li>
          <BurgerMenu />
        </li>
      </ul>
    </header>
  );
}
