# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Summary of what we did in Class-02

- Follow the same procedure as we did in Class-01 to start a new project:

      Open the new terminal in your VS-Code text editor.

      Get Started > npm create vite@latest

      give your project name(Day-02/edverter) and select React as a framework, and JavaScript as a variant. 

- To go to your project folder, use the command;  cd Day-02/edverter

      First, install node_modules so that we can install the dependencies mentioned in package.json;

      so use the command npm install (to have node_modules in our project)

      Now our project will work by the command npm run dev

            (node_modules is a folder that is auto-generated when npm is installed.

             It has a large number of dependencies  which we can install as we need)

- Understanding The React Flow:

App.jsx    =>    main.jsx     =>     index.html    =>     Browser Display

Writing components in separate files as Header.jsx, Footer.jsx, About.jsx, etc.

And Importing them into the App.jsx,

And from App.jsx to main.jsx,

Rendering from main.jsx through id='root'to  index.html

index.html has a div which has id='root'

And finally 'root' is responsible for giving a UI

- Removing the extra code from App.jsx to create our own component.

- Keep the index.css and App.css files, however remove their import code-line from main.jsx and App.jsx

- App.jsx itself is a component.

      A component is a function that is exported to main.jsx to render into 'root'.

- A single div can be rendered in a component. To pass multiple tags or divs they must be wrapped into a single div or empty tag called Fragment.

   Fragment <>  </> is recommended instead of creating extra divs.

- Self-created components are imported in App.jsx

So create a Header.jsx (component) and import it in App.jsx

Use <Header /> in App.jsx to return

- Remove the App.css styling to write our own CSS to style our component(Header.jsx)

- In the same way, we can create other components like Footer.jsx and About.jsx (all rendering in Home Page)

![day-02](https://github.com/Uzmakh/edversityReact/assets/91914613/98baf21c-897b-412a-82f2-bbee83fee692)
