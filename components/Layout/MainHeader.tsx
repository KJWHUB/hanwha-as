import Link from 'next/link';
import header from './header.module.scss';

import { MainMenuType } from '@/types/menu';
import menuApi from '@/services/module/menu';
import BurgerMenu from '../Menu/BurgerMenu';

export default async function MainHeader() {
  const response = await menuApi.getMenuList();

  return (
    <header className={`${header.header} menu__hamburger`}>
      <Link href="/">
        <img src="/images/content/common/d-logo.svg" alt="" />
      </Link>
      <nav className="main-menu">
        {response.map((el: MainMenuType) => {
          return (
            <Link href={el.path} key={el.id}>
              {el.text}
            </Link>
          );
        })}
      </nav>

      <ul className="icon-wrap">
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
