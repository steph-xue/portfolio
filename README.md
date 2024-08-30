# Portfolio - Stephanie Xue

My portfolio is a dynamic single-page web application built using the front-end JavaScript library, React. There is a navigation bar at the top that allows you to move between different sections of the web application, including the homepage, the about me page, the projects page, the experiences page, and the contact me page. The homepage displays an animated terminal-like welcome message to the user. The about me page contains some information about myself, my background, and my interests. This page also contains a photo gallery of some pictures I have taken, including travel photos, food photos, and photos of my beloved cat, Rhea. The projects page showcases some of the projects I have been working on. Each project contains some screenshot images that you can view in a carousel or slideshow, a descripion of the project and languages/tools used, a link to the github page, and an active web link if there is one avaliable. The experiences page lists some of my experiences including my technical skills, education, healthcare experience, and research experience. The contact me page includes links to my email, github, linkedIn, and instagram. There is also a feature on the contact me page to send a message to my email. The footer of the web application also contains icons with links to my social media webpages. There is also a toggle button at the top right of the navigation bar that allows you to toggle between light mode and dark mode.
&nbsp;

Can access on: https://portfolio-steph-xue.netlify.app
<br><br>

## Sections You Can Navigate:

**Homepage**
  - Homepage
<br><br>
![Homepage Light ](./images/homepage-light.png?raw=true "Homepage Light")
Homepage light.
![Homepage Dark ](./images/homepage-dark.png?raw=true "Homepage Dark")
Homepage dark.
<br><br>
&nbsp;

**About Me**
  - About me
<br><br>
![About Me 1](./images/about-me-1.png?raw=true "About Me 1")
About me 1.
![About Me 2](./images/about-me-2.png?raw=true "About Me 2")
About me 2.
<br><br>
&nbsp;

**Projects**
  - Projects
<br><br>
![Projects](./images/projects.png?raw=true "Projects")
Projects
<br><br>
&nbsp;

**Experiences**
 - Experiences
<br><br>
![Experiences](./images/experiences.png?raw=true "Experiences")
Experiences
<br><br>
&nbsp;

**Contact Me**
 - Contact Me
<br><br>
![Contact Me](./images/contact-me.png?raw=true "Contact Me")
Contact me.
<br><br>

## Special Features
 - Animated background
 - Animated homepage title
 - Navbar color scrolling
 - Image gallery
 - Projects screenshot carousel
 - Light/dark mode
<br><br>

## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 
      
## Dependencies 
  - React-router
    - R
  - React-image-gallery
    - R
      
## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
- Install the latest version of npm (JavaScript package manager)
- Install the latest version of vite which can be done by typing in the command line 'npm install -D vite'
- Install the dependencies by running the following commands:
  - React-router
    - 'npm install react-confetti'
  - React-image-gallery
    - 'npm install react-router-dom'
- The web application can be run on your local server by typing in the command line 'npm run dev'

## How to Deploy
- To build out the web application for deployment use “npm run build”
- To test out the preview before deploying the application use “npm run preview”
- Deploy the web application on your server of choice:
  - Netlify using the command line
    - Install the Netlify CLI using “npm install -g netlify-cli”
    - Create a new site in Netlify using “ntl init”
    - Deploy to a unique preview URL using “ntl deploy”
    - The Netlify CLI will share with you a preview URL to inspect. When you are ready to go into production, use the prod flag to deploy the site into production “ntl deploy --prod”
  - Netlify using github
    - Import the project to netlify
    - Choose the branch, output directory, and set up environment variables if applicable and click deploy
