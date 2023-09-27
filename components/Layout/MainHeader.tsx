import Image from 'next/image';
import Link from 'next/link';

import HeaderRrightMenu from '@/components/Menu/HeaderRrightMenu.tsx';
import menuApi from '@/services/module/menu/index.ts';
import { MainMenuType } from '@/types/menu/index.ts';
import header from './header.module.scss';

export default async function MainHeader() {
  const response = await menuApi.getMenuList();

  return (
    <header className={header.header}>
      <Link href="/">
        <Image src="/images/content/common/d-logo.svg" width={272} height={48} alt="logo" priority />
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

      <HeaderRrightMenu />
    </header>
  );
}
