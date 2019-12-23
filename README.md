## Tailwind CSS Course

### Lecture 1: Setting up Tailwind and PostCSS

- Run: ```mkdir my-tailwind-project```
- As Tailwind is a plugin available on NPM, we need a package.json file
  - Create an empty package.json using ```npm init -y```
- Install Tailwind CSS, something to process our CSS through a chain of PostCSS plugins (i.e. postcss-cli), and the ability to automatically add vendor prefixes (i.e. autoprefixer)
  - Code: ```npm install tailwindcss postcss-cli autoprefixer```
- Configure Tailwind and PostCSS
  - Run ```npx tailwind init```
    - Creates an empty tailwind.config.js file in our project's root, which is where you would want to go if you ever needed to customize Tailwind
  - Create a PostCSS config file in the root of the project, i.e. postcss.config.js
    - This is the file where we specify which PostCSS plugins we want to use
- Run: ```mkdir css``` and create a tailwind.css file within that directory
  - Tailwind CSS works by looking through your CSS for custom markers and then replaces them with Tailwind's generated code
  - Add the necessary code to tailwind.css
- Write a script to process the CSS through our list of PostCSS plugins
  - Done in package.json
    - Replace "test" script with a "build" script that uses postcss-cli, an input file, and specifies an output file
  - Run: ```npm run build```
    - Pretty sure I needed to make everything public/build/tailwind.css before running ```npm run build```
- Take a look at public/build/tailwind.css to see the CSS
  - @tailwind base &rarr; all of the reset classes
  - @tailwind component &rarr; container class
  - @tailwind utilities &rarr; all of Tailwind's utility classes, including vendor prefixes
- Create public/index.html
  - Scaffold out a basic HTML5 file
  - Link to the tailwind.css file, just like you would link to any other stylesheet
  - Run: ```npm install -g live-server```, then ```live-server public```
  - Use Tailwind's utility classes to add some styles to an h1 element