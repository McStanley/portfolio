import Envelope from '../assets/envelope.svg';
import GithubLogo from '../assets/github.svg';
import LinkedInLogo from '../assets/linkedin.svg';
import TwitterLogo from '../assets/twitter.svg';
import ImageMobile from '../assets/footer-image-mobile.jpg';
import ImageTablet from '../assets/footer-image-tablet.jpg';
import ImageDesktop from '../assets/footer-image-desktop.jpg';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <section className="Footer-info">
          <h2>Contact me</h2>
          <p className="Footer-text">
            Please get in touch if you think our work could be mutually
            beneficial!
          </p>
          <div className="Footer-emailContainer">
            <img className="Footer-envelope" src={Envelope} alt="Email" />
            <a
              className="Footer-email"
              href="mailto:0stanislawolejniczak0@gmail.com"
            >
              0stanislawolejniczak0@gmail.com
            </a>
          </div>
          <div className="Footer-links">
            <a
              href="https://github.com/McStanley"
              target="_blank"
              rel="noreferrer"
            >
              <img className="Footer-logo" src={GithubLogo} alt="Github" />
            </a>
            <a
              href="https://linkedin.com/in/stanislaw-olejniczak/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="Footer-logo" src={LinkedInLogo} alt="LinkedIn" />
            </a>
            <a
              href="https://twitter.com/16stanley16"
              target="_blank"
              rel="noreferrer"
            >
              <img className="Footer-logo" src={TwitterLogo} alt="Twitter" />
            </a>
          </div>
        </section>
        <picture className="Footer-image">
          <source media="(min-width: 1200px)" srcSet={ImageDesktop} />
          <source media="(min-width: 600px)" srcSet={ImageTablet} />
          <img src={ImageMobile} alt="" />
        </picture>
      </div>
    </footer>
  );
}

export default Footer;
