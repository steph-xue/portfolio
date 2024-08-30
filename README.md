# Portfolio - Stephanie Xue

My portfolio is a dynamic single-page web application built using the front-end JavaScript library, React. There is a navigation bar at the top that allows you to move between different sections of the web application, including the homepage, the about me page, the projects page, the experiences page, and the contact me page. The homepage displays an animated terminal-like welcome message to the user. The about me page contains some information about myself, my background, and my interests. This page also contains a photo gallery of some pictures I have taken, including travel photos, food photos, and photos of my beloved cat, Rhea. The projects page showcases some of the projects I have been working on. Each project contains some screenshot images that you can view in a carousel or slideshow, a descripion of the project and languages/tools used, a link to the github page, and an active web link if there is one avaliable. The experiences page lists some of my experiences including my technical skills, education, healthcare experience, and research experience. The contact me page includes links to my email, github, linkedIn, and instagram. There is also a feature on the contact me page to send a message to my email. The footer of the web application also contains icons with links to my social media webpages. There is also a toggle button at the top right of the navigation bar that allows you to switch between light mode and dark mode.
&nbsp;

Can access on: https://portfolio-steph-xue.netlify.app
<br><br>

## Sections You Can Navigate:

**Homepage**
  - The homepage displays an animated terminal-like welcome message to the user
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
  - The bottom of the about me page also contains a photo gallery of some pictures I have taken, including travel photos, food photos, and photos of my beloved cat, Rhea
    - The image gallery generates a selection of random photos, so different photos are populated every time the page is refreshed
    - When a photo is clicked on, the user can view a closer picture of the photo with its description
<br><br>
![About Me 1](./images/about-me-1.png?raw=true "About Me 1")
About Me Page
<br><br>
![About Me 2](./images/about-me-2.png?raw=true "About Me 2")
About Me Page Continued With Photo Gallery
<br><br>
&nbsp;

**Projects**
  - The projects page showcases some of the projects I have been working on
  - Each project contains some screenshot images that you can view in a carousel or slideshow, a descripion of the project and languages/tools used, a link to the github page, and an active web link if there is one avaliable
  - The screenshot carosel allows the user to scroll through thumbnails of different screenshot images of the project to view, open the image in full screen, as well as press play to view an animated slide show of all the project images
  - Clicking on the project container itself will bring the user to the associated github page
<br><br>
![Projects](./images/projects.png?raw=true "Projects")
Projects Page
<br><br>
&nbsp;

**Experiences**
 - The experiences page lists some of my experiences including my technical skills, education, as well as my previous healthcare and research experiences
<br><br>
![Experiences](./images/experiences.png?raw=true "Experiences")
Experiences Page
<br><br>
&nbsp;

**Contact Me**
 - The contact me page includes links to the following sites and social media accounts:
   - Email, github, linkedin, instagram
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
 - Image gallery
   - The about me page contains an image gallery that generates a selection of random photos to view every time the page is refreshed
   - Each photo when clicked on will bring a closer view of the image with its description
 - Projects screenshot carousel
   - The projects page contains a screenshot carousel for each project
   - The screenshot carosel allows the user to scroll through thumbnails of different screenshot images of the project to view, open the image in full screen, as well as press play to view an animated slide show of all the project images
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
- Install the latest version of npm (JavaScript package manager)
- Install the latest version of vite which can be done by typing in the command line 'npm install -D vite'
- Install the dependencies by running the following commands:
  - React-router
    - 'npm install react-router' and 'npm install react-router-dom'
  - React-image-gallery
    - 'npm install react-image-gallery'
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
