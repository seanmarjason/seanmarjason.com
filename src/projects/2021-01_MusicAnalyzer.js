import image from './images/2021-01_MusicAnalyzer.png'

const project = {
  path: '/music-analyzer',
  heading: 'Music Analyzer',
  date: 'January 2021',
  image: image,
  summary: 'Progressing through introductions to javascript, this music analyzer was also built in p5.js, but applying more Object Oriented techniques',
  link: '',
  source: 'https://github.com/seanmarjason/MusicAnalyzer',
  content: 
  <>
  <p>
    As part of the Introduction to Programming II course at University of London, 
    students were to extend their learning of javascript with a more complex application. 
    Again, p5.js was used to avoid getting too deep into the implementation of drawing functions 
    and user interactions, but rather than implementing a game students were asked to 
    create a usable application support either graphic design, music analysis, or 
    data analysis. 
  </p>
  <p>
    Implementing a music analyzer in p5.js required interacting with a Fast Fourier Transform 
    implemented by p5.js. This then allowed visualisations to be prepared based on various 
    audio frequencies within the waveform of a loaded audio track. 
  </p>
  <p>
    File system operations were also added to allow for loading of audio tracks from the user's 
    local file system into the browser session, providing key functionality for users looking 
    to examine their own tracks.
  </p>
  <p>
    For this topic, students were encouraged to separate the logic of the application into 
    various modules, providing some introductions to concepts of Object Oriented Programming. 
    This was not an extensive introduction to OOP, but helped to lay the foundation for future 
    subjects.
  </p>
  <p>
    Similar to the previous Game Project, for future iterations, it would have been useful 
    to implement a package manager or at least a bundling step.
  </p>
</>
}

export default project;
