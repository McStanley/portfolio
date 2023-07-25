import Avatar from '../assets/avatar_hq.jpg';
import GithubLogo from '../assets/github.svg';
import TwitterLogo from '../assets/twitter.svg';
import './styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header-imageContainer">
        <img src={Avatar} alt="Stanisław Olejniczak" className="Header-image" />
        <h1 className="Header-name">Stanisław Olejniczak</h1>
      </div>
      <section className="Header-info">
        <h2 className="Header-sectionTitle">About me</h2>
        <p className="Header-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          tenetur repellendus, provident alias consequuntur, nobis
          necessitatibus incidunt modi similique et adipisci laudantium. Eius
          quaerat repudiandae autem, accusantium corporis nisi maxime. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Temporibus nam
          minus placeat quo animi perferendis, quis esse culpa excepturi
          doloremque pariatur a? Quaerat nostrum ut maxime perferendis aperiam
          debitis possimus.
        </p>
        <div className="Header-links">
          <a
            href="https://github.com/McStanley"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Header-logo" src={GithubLogo} alt="Github" />
          </a>
          <a
            href="https://twitter.com/16stanley16"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Header-logo" src={TwitterLogo} alt="Twitter" />
          </a>
        </div>
      </section>
    </header>
  );
}

export default Header;
