# Portfolio - Stephanie Xue

My portfolio is a dynamic web application built using the front-end JavaScript library, React. There is a navigation bar at the top that allows you to navigate to different sections of the web application, including the homepage, the about me page, the projects page, the experiences page, and the contact me page. The homepage
&nbsp;

Can access on: [https://quizzical-sx.netlify.app/](https://portfolio-steph-xue.netlify.app)
<br><br>

## Here are the sections you can navigate through:

**Homepage**
  - The player can choose their desired level of difficulty of quiz questions and a category of questions and click start to begin the quiz
<br><br>
![Homepage Light ](./images/homepage-light.png?raw=true "Homepage Light")
The start page includes the selection of difficulties and categories of questions.
![Homepage Dark ](./images/homepage-dark.png?raw=true "Homepage Dark")
The start page includes the selection of difficulties and categories of questions.
<br><br>
&nbsp;

**About Me**
  - The player can choose the difficulty of questions generated:
    - Easy
<br><br>
![About Me 1](./images/about-me-1.png?raw=true "About Me 1")
The player can choose their desired level of questions from the following: easy, medium, hard.
![About Me 2](./images/about-me-2.png?raw=true "About Me 2")
The player can choose their desired level of questions from the following: easy, medium, hard.
<br><br>
&nbsp;

**Projects**
  - The player can choose their desired category of questions:
    - All
    - General Knowledge
<br><br>
![Projects](./images/projects.png?raw=true "Projects")
The player can choose their desired category of questions ranging from geography to pop culture.
<br><br>
&nbsp;

**Experiences**
 - The quiz will then generate a random array of 5 multiple choice or true/false questions based on the difficulty and category of questions choosen
 - The data of quiz questions is retrieved from the Open Trivia Database API 
<br><br>
![Experiences](./images/experiences.png?raw=true "Experiences")
A random list of 5 questions will be generated based on the difficulty and category of questions choosen.
<br><br>
&nbsp;

**Contact Me**
 - After the player is done answering the questions, they can click on the 'check answers' button to check which questions they got correct and incorrect
 - The quiz will then display all questions the player had answered correctly and incorrectly
   - The result for each question will be displayed as 'correct' or 'incorrect' 
   - Answers that the player got wrong will have the button marked in red
   - Answers that the player got right will have the button marked in green
   - If the player got the answer wrong, the actual correct answer button will be marked in a lighter green
 -  The quiz will calculate their total score out of the total of quiz questions (out of 5)
<br><br>
![Contact Me](./images/contact-me.png?raw=true "Contact Me")
The player can check their answers and score after completing the quiz.
<br><br>

## Other Features
 - After the player is done answering the questions, they can click on the 'check answers' button to check which questions they got correct and incorrect
 - The
<br><br>

## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 
      
## Dependencies 
  - React-confetti
    - Displays rainbow confetti that falls from the top of the page
  - Html-entities
    - Can encode and decode text replacing html entities to characters
  - Nano ID
    - A tiny, secure, URL-friendly, unique string ID generator for JavaScript
      
## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
- Install the latest version of npm (JavaScript package manager)
- Install the latest version of vite which can be done by typing in the command line 'npm install -D vite'
- Install the dependencies by running the following commands:
  - React-confetti
    - 'npm install react-confetti'
  - Html-entities
    - 'npm install html-entities'
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
