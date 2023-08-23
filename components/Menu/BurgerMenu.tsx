import '/styles/hamburgers.css';

export default function BurgerMenu() {
  return (
    <button className="hamburger" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
