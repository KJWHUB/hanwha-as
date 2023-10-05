'use client';

import Image from 'next/image';
import Lang from '@/constants/index.ts';
import style from './websiteIcon.module.scss';

export default function WebsiteIcon() {
  const clickWebsite = () => {};

  const defStyle = {
    backgroundColor: 'transparent',
    border: 0
  };
  return (
    <div className={style.iconWrap}>
      <button onClick={clickWebsite} type="button" style={defStyle}>
        <Image src="/images/content/common/ico-website.svg" width={25} height={25} alt="지구본" />
      </button>
      <ul>
        {Object.values(Lang).map((el, i) => (
          <li key={i}>
            <button type="button">{el}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
