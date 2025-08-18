import React,{ useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const whatIsJSX = (
  //   <div>
  //     <p>Is it JavaScript?</p>
  //     <p>Is it HTML?</p>
  //     <p>No, it's JSX!</p>
  //   </div>
  // );

  
const spiderman = { 
  name: 'Spiderman', 
  alterEgo: 'Peter Parker', 
  catchPhrase: 'With great power comes great responsibility' 
};

// single parent <div> element
const spideyJSX = (<div>
<h3>{spiderman.name}</h3>

<blockquote>{spiderman.catchPhrase}</blockquote>
<cite>{spiderman.alterEgo}</cite>
</div>);

// single parent fragment element
const spideyJSXFragment = (<>
<h3>{spiderman.name}</h3>

<blockquote>{spiderman.catchPhrase}</blockquote>
<cite>{spiderman.alterEgo}</cite>
</>);

// render each of these examples and check the difference in the HTML in your browser.  


// const spideyJSX = (<div>
// <h3>{spiderman.name}</h3>
// <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
// </div>);

// standard JSX syntax for creating an element - render with {jsxElement}
const jsxElement = <h1 className="greeting">Hello World</h1>

// bypassing JSX and creating the element in React directly - render with {nojsxElement}
const nojsxElement = React.createElement('h1', { className: 'greeting' }, 'Hello World')

// the actual JS representation of the element as an object - can't render directly
const jsElement = { type: 'h1', props: { className: 'greeting', children: 'Hello World' } }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br/>
          {spiderman.name}
          <br/>
       {spiderman.alterEgo}
       <br/>
    
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {jsxElement}
        {nojsxElement}
        {jsElement.type}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
