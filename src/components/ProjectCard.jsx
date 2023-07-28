import GithubLogo from '../assets/github.svg';
import OpenInNew from '../assets/open-in-new.svg';
import PropTypes from 'prop-types';
import './styles/ProjectCard.css';

function ProjectCard({ name, description, screenshot, repoUrl, demoUrl }) {
  return (
    <article className="ProjectCard">
      <div className="ProjectCard-imageContainer">
        <img
          className="ProjectCard-image"
          src={screenshot}
          alt={`${name} screenshot`}
        />
      </div>
      <div className="ProjectCard-info">
        <div className="ProjectCard-row">
          <h3>{name}</h3>
          <div className="ProjectCard-links">
            <a href={repoUrl} target="_blank" rel="noreferrer">
              <img src={GithubLogo} alt="Github repository" />
            </a>
            <a href={demoUrl} target="_blank" rel="noreferrer">
              <img src={OpenInNew} alt="Live demo" />
            </a>
          </div>
        </div>
        <p className="ProjectCard-description">{description}</p>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
