'use client';

import { useState } from 'react';

export default function BurgerMenu() {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);

  const chageHamburgerState = () => {
    setHamburgerIsActive(!hamburgerIsActive);
  };

  return (
    <button
      className={`hamburger hamburger--squeeze ${hamburgerIsActive ? 'is-active' : ''}`}
      type="button"
      onClick={chageHamburgerState}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}
