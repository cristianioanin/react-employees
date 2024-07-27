import './Header.css';

function Header({ headline, goBackLink }) {
  return (
    <header>
      {goBackLink && (
        <a className="nav-link" href={goBackLink}>
          &larr;
        </a>
      )}
      <h2>{headline}</h2>
    </header>
  );
}

export default Header;
