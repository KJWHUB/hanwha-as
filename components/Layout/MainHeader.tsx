import Link from 'next/link';
import header from './header.module.scss';

export default async function MainHeader() {
  interface MainMenuType {
    id: string;
    text: string;
    path: string;
    down: Array<any>;
  }

  const api = await fetch('http://localhost:9999/menuList');
  const response = await api.json();

  return (
    <header className={header.mainHeader}>
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
        <li></li>
      </ul>
    </header>
  );
}
