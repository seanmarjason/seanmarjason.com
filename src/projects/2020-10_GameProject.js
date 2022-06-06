import image from './images/2020-10_GameProject.png'

const project = {
  path: '/game-project',
  heading: 'Game Project',
  date: 'October 2020',
  image: image,
  summary: 'As part of an introduction to javascript class, created an interactive platform game in p5.js',
  link: 'https://astounding-sawine-86cad1.netlify.app/',
  source: 'https://github.com/seanmarjason/GameProject',
  content: 
    <>
      <p>
        As part of the Introduction to Programming course at University of London, 
        students were to begin learning how to program a game in javascript. To avoid 
        getting too deep into the implementation of drawing functions, character movement 
        and user interactions, students were taught how to use the p5.js library. 
      </p>
      <p>
        Implementing a platforming game in p5.js required understanding how the p5.js 
        library works, including its draw loop and built in user interaction methods. 
        Then a character was to be rendered to the game, sprites for the user to interact 
        with, and other geometry for the character to stand on, fall through, and collect.
      </p>
      <p>
        While students could implement the game in a single script, it was beneficial 
        to separate the game into various modules which could then be reused. However, 
        this was done without the use of a package manager or bundler and so meant 
        modules were defined as separate scripts in the root html file.
      </p>
      <p>
        For future iterations, it would have been useful to implement a package manager 
        or at least a bundling step. 
      </p>
    </>
}

export default project;
