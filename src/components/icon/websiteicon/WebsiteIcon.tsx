'use client'

import { useState } from 'react'

import Image from 'next/image'

import classNames from 'classnames'

import Lang from '@/constants'

import style from './websiteIcon.module.scss'

export default function WebsiteIcon() {
  const [isOn, setIsOn] = useState(false)
  const clickWebsite = () => {
    setIsOn(!isOn)
  }

  return (
    <div className={style.iconWrap}>
      <button onClick={clickWebsite} type="button">
        <Image
          src="/images/content/common/ico-website.svg"
          width={25}
          height={25}
          alt="지구본"
        />
      </button>

      <div
        className={classNames('translation-list-wrap', isOn ? 'open' : 'close')}
      >
        <ul>
          {Object.values(Lang).map((el, i) => (
            <li key={i}>
              <button type="button">{el}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
