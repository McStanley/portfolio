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
          Hello! I{`'`}m Stanisław, an aspiring web developer based in Poland
          with a primary focus on React. I find joy in crafting interactive and
          user-friendly web experiences that look great and function seamlessly.
          I am currently honing my skills and knowledge through{' '}
          <a
            className="Header-topLink"
            href="https://www.theodinproject.com/about"
            target="_blank"
            rel="noreferrer"
          >
            The Odin Project{`'`}s
          </a>{' '}
          comprehensive curriculum, which has been instrumental in shaping my
          understanding of web development and preparing me to tackle real-world
          projects with confidence.
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
