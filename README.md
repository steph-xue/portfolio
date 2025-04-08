# Portfolio - Stephanie Xue

My own personal portfolio website crafted from scratch to showcase personal projects, technical skills, professional experience, and digital artwork. Every element of my portfolio website was intentionally designed and developed to reflect my own style, individuality, and creativity. This dynamic single-page web application was built using the front-end JavaScript library, React.
- There is a navigation bar at the top that allows you to move between different sections of the web application, including the homepage, the about me page, the projects page, the experiences page, the digital art page, and the contact me page.
- The homepage displays an animated console-like welcome message to the viewer. The about me page contains some information about myself, my background, and my interests. This page also contains a photography gallery of some pictures I have taken, including travel photos, food photos, and photos of my beloved cat, Rhea. The viewer can refresh the photography gallery to randomly generate new photos to view.
- The projects page showcases some of the projects I have been working on. Each project contains some screenshot images that you can view in a carousel, a descripion of the project, languages/tools used, and any project links.
- The experiences page showcases some of my experiences including my resume, technical skills, education, academic awards healthcare experience, and research experience.
- The digital art page showcases some art pieces I have drawn with more to be coming soon!
- The contact me page includes links to my social media and projects. There is also a messaging feature on the contact me page that allows viewers to send a message to my email.
- There is also a toggle button at the top right of the navigation bar that allows you to switch between light mode and dark mode.
&nbsp;

Can access on: https://stephxue.com/ or https://portfolio-steph-xue.netlify.app
<br><br>

## Sections You Can Navigate:

**Homepage**
  - The homepage displays an animated console-like welcome message to the user
  - The user can toggle between light mode and dark mode using the toggle button at the top right of the navigation bar 
<br><br>
![Homepage Light ](./images/homepage-light.png?raw=true "Homepage Light")
Homepage Light Mode
<br><br>
![Homepage Dark ](./images/homepage-dark.png?raw=true "Homepage Dark")
Homepage Dark Mode
<br><br>
&nbsp;

**About Me**
  - The about me page contains some information about myself, my background, and my interests
  - The bottom of the about me page also contains a photography gallery of some pictures I have taken, including travel photos, food photos, and photos of my beloved cat, Rhea
    - The photography gallery allows the viewer to generate a selection of random photos each time the refresh button is clicked on or the page is refreshed 
    - When a photo is clicked on, the user can view it in full screen along with its description
<br><br>
![About Me 1](./images/about-me-1.png?raw=true "About Me 1")
About Me Page
<br><br>
![About Me 2](./images/about-me-2.png?raw=true "About Me 2")
About Me Page Continued With Photo Gallery
<br><br>
![Image Gallery](./images/image-gallery.png?raw=true "Image Gallery")
Full Screen View of the a Photo in the Image Gallery
<br><br>
&nbsp;

**Projects**
  - The projects page showcases some of the projects I have been working on
  - Each project contains some screenshot images that you can view in a carousel or slideshow, a descripion of the project and languages/tools used, a link to the github page, and an active web link if there is one avaliable, and a devpost link if there is one avaliable
  - The screenshot carosel allows the user to scroll through thumbnails of different screenshot images of the project to view, open the image in full screen, as well as press play to view an animated slide show of all the project images
  - Clicking on the project container itself will bring the user to the associated github page
<br><br>
![Projects](./images/projects.png?raw=true "Projects")
Projects Page
<br><br>
&nbsp;

**Experiences**
 - The experiences page lists some of my experiences including my resume, technical skills, education, academic awards, previous healthcare experience, and previous research experience
 - Viewers can use the navigation bar at the top to automatically bring them to the desired section of experiences to view using smooth scrolling
<br><br>
![Experiences](./images/experiences.png?raw=true "Experiences")
Experiences Page
<br><br>
&nbsp;

**Digital Art**
 - The digital art page displays some pieces of art I have worked on with more to be coming soon!
<br><br>
![Digital Art](./images/digital-art.png?raw=true "Digital Art")
Digital Art Page
<br><br>
&nbsp;

**Contact Me**
 - The contact me page includes links to the following sites and social media accounts:
   - Email, Github, Devpost, Linkedin, Instagram
 - There is also a feature on the contact me page to send a message to my email
   - The user must enter their own name, email, and the message they want to send
<br><br>
![Contact Me](./images/contact-me.png?raw=true "Contact Me")
Contact Me Page
<br><br>

## Special Features
 - Light/dark mode
   - There is a toggle button at the top right of the navigation bar that allows you to switch between light mode and dark mode
 - Animated background
   - The background of the web application is an animated gradient that introduces a subtle change in colors (for both light and dark modes)  
 - Animated homepage title
   - The homepage displays an animated terminal-like welcome message to the user
 - Animated photos, buttons, containers
   - The photos, buttons, and containers have different hover and focus effects that give it a more interactive feel
 - Navbar scrolling animation
   - The navbar displays a seemless transition when the user scrolls down from the top of the page which changes the color of the background of the navbar and brings it along with the user
 - Randomized photography gallery
   - The about me page contains a photograph gallery that generates a selection of random photos to view every time the refresh button is pressed or the page is refreshed 
   - Each photo when clicked on will bring up a full screen view of the image with its description
 - Projects screenshot carousel
   - The projects page contains a screenshot carousel for each project
   - The screenshot carosel allows the user to scroll through thumbnails of different screenshot images of the project to view, open the image in full screen, as well as press play to view an animated slide show of all the project images
 - Experiences navigation bar
   - Viewers can use the navigation bar at the top of the experiences bag to automatically bring them to the desired section of experiences to view using smooth scrolling
<br><br>

## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 
      
## Dependencies 
  - React-router
    - Enables 'client side routing' to build single page web applications
    - Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information
  - React-image-gallery
    - React component for building image galleries and carousels
    - More information at https://www.npmjs.com/package/react-image-gallery
      
## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
    - Check the version using the command
        - ```node --version```
- Install the latest version of npm (JavaScript package manager)
    - Check the version using the command
        - ```npm --version```
- Clone the repository from github by typing in the command line
    - HTTPS: ```git clone https://github.com/steph-xue/portfolio.git```
    - SSH: ```git clone git@github.com:steph-xue/portfolio.git```
- Install any dependencies by using the command
    - ```npm install```
- The web application can be run on your local server by typing the command
    - ```npm run dev```
