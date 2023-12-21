# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


##Summary of class-01:

(The documentation here we need of NodeJs, NPM, and of Vite)
- First, install Nodejs from nodejs.org for Windows.
   Go to the LTS (Long Term Supported) box. Go with this version and install this.

      Nodejs is the JS runtime environment that enables JS to run outside the browser.
      NPM is also installed with nodeJs that contain all 
      the necessary JS packages in it.

- npm manages downloads of dependencies of your project. (node package manager) https://www.npmjs.com/

such as react, is even, etc.

- Now open your terminal and type node -v (to know the node version)

  and type npm -v (to know the npm version).

- The React app was previously created with the npx create-react-app command 2 years back.
- Then Vite + React was introduced to be a 
 better improvement in the field. It has light-weight packages so it gives good speed to React-App.

    Go to Vite site: https://vitejs.dev/ > Get Started > npm create vite@latest

    give your project name, and select React as a framework, and JavaScript as a variant. 

  Tip: code project-name/ (to open in VS-Code text editor)

      First, install node_modules so that we can install the dependencies mentioned in package.json;

      so use the command npm install (to have node_modules in our project)

      Now our project will work by the command npm run dev

Tip: cntrl + c to stop the server.

      The files in the public folder can be accessed by the users by giving an endpoint in the URL but those in the assets folder can't 
      be  accessed by them.
      The HTML code that is written in JS functions is called JSX format/Syntax.
