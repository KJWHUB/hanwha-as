import Link from 'next/link';
import header from './header.module.scss';

import { MainMenuType } from '@/types/menu';
import menuApi from '@/services/module/menu';
import BurgerMenu from '../Menu/BurgerMenu';

export default async function MainHeader() {
  const response = await menuApi.getMenuList();

  return (
    <header className={header.header}>
      <Link href="/">
        <img src="/images/content/common/d-logo.svg" alt="" />
      </Link>
      <nav className={header.mainMenuWrap}>
        {response.map((el: MainMenuType) => {
          return (
            <div className={`${header.depth0} btn3-en`}>
              <Link href={el.path} key={el.id} className={header.linkHeaderWhite}>
                {el.text}
              </Link>
            </div>
          );
        })}
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
