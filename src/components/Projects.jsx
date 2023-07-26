import ProjectCard from './ProjectCard';
import StanboxdImg from '../assets/stanboxd.jpg';
import CVGeneratorImg from '../assets/cv-generator.jpg';
import SeekAndFindImg from '../assets/seek-and-find.jpg';
import MemoryGameImg from '../assets/memory-game.jpg';
import TodoListImg from '../assets/todo-list.jpg';
import QuizzicalTriviaImg from '../assets/quizzical-trivia.jpg';
import './styles/Projects.css';

function Projects() {
  return (
    <main className="Projects">
      <h2>My work</h2>
      <div className="Projects-list">
        <ProjectCard
          name="Stanboxd"
          description="A film platform built with React, Firebase and TMDB API enabling users to search for films and review them. Includes user authentication and profile settings."
          screenshot={StanboxdImg}
          repoUrl="https://github.com/McStanley/stanboxd"
          demoUrl="https://stanboxd.vercel.app/"
        />
        <ProjectCard
          name="CV Generator"
          description="A React CV Generator which allows individuals to effortlessly create and fill out a professional Curriculum Vitae with their personal information and a photo."
          screenshot={CVGeneratorImg}
          repoUrl="https://github.com/McStanley/cv-generator"
          demoUrl="https://mcstanley.github.io/cv-generator/"
        />
        <ProjectCard
          name="Seek and find"
          description="Where's Waldo style game. Includes a leaderboard powered by Firebase. Notifications implemented with React Hot Toast library."
          screenshot={SeekAndFindImg}
          repoUrl="https://github.com/McStanley/seek-and-find"
          demoUrl="https://mcstanley.github.io/seek-and-find/"
        />
        <ProjectCard
          name="Memory Game"
          description="Memory game made with React. Incorporates score tracking and an ever-increasing difficulty level."
          screenshot={MemoryGameImg}
          repoUrl="https://github.com/McStanley/memory-game"
          demoUrl="https://mcstanley.github.io/memory-game/"
        />
        <ProjectCard
          name="Todo list"
          description="A todo list built with JavaScript. User authentication and data storage implemented using Firebase."
          screenshot={TodoListImg}
          repoUrl="https://github.com/McStanley/todo-list"
          demoUrl="https://mcstanley.github.io/todo-list/"
        />
        <ProjectCard
          name="Quizzical Trivia"
          description="Trivia game powered by questions from the Open Trivia Database API."
          screenshot={QuizzicalTriviaImg}
          repoUrl="https://github.com/McStanley/quizzical-trivia"
          demoUrl="https://mcstanley.github.io/quizzical-trivia/"
        />
      </div>
    </main>
  );
}

export default Projects;
