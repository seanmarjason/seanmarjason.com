import image from './images/2019-12_HTMLWebsite.png'

const project = {
  path: '/original-website',
  heading: 'Raw HTML Website',
  date: 'December 2019',
  image: image,
  summary: 'My first attempt at an interactive website to learn the basics of html, css, and javascript',
  link: 'https://seanmarjason-rawhtml.netlify.app/',
  source: 'https://github.com/seanmarjason/seanmarjason.com_old',
  content: 
    <>
      <p>
        While I had already created a basic website using the "all powerful" Wordpress, 
        I wanted to challenge myself to create my own site from scratch. Adding in the 
        styles, interactions, and content that I WANT to include, rather than relying 
        on generic templates.
      </p>
      <p>
        This project started with an initial design. Taking tips from Steve Krug's "Don't 
        Make Me Think" and inspiration from a wide array of sources including other 
        websites, interesting illustrations, and of course my favourite set designs of all, 
        Blade Runner both old and new!, I prepared an initial set of designs in Balsamiq.
      </p>
      <p>
        Then, taking a mobile-first approach, the site came together.
      </p>
      <p>
        This was my first experience building a full-scale website without the use of any 
        CMS or other website building application. While I knew that building a website in 
        raw HTML / CSS / JS is not common practice, I wanted to understand why developers 
        don't do this. It quickly became clear!
      </p>
      <p>
        Websites too often contain components which can easily be re-used (e.g. Navbars, Buttons, 
        etc.). Building individual pages from scratch means A LOT of repetition, and does 
        not enable developers to make use of clean code practices such as modularisation.
      </p>
      <p>
        While it did help me to understand how websites eventually come together in the browser, 
        I can confirm I will not be building a site from scratch like this again.
      </p>
    </>
}

export default project;
