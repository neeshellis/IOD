// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from './components/PropsDisplayer'; // up the top
import City from "./components/City";
import Pet from "./components/Pet";
import Greeting from "./components/Greeting";
import FullName from "./components/FullName"
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import {FancyBox, Callout} from "./components/FancyBox";
import MoviesList from "./components/MoviesList";
import Movie from "./components/Movie";
import MoodChanger from "./components/MoodChanger";
import BigCats from "./components/BigCats";


// function ExampleComponent() {
//   return (
//     <div className="ExampleComponent componentBox">
//       <h1>My Example Component</h1>
//       <p>My first React component!</p>

//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//   );
// }


// function Welcome(props) {
//   // custom Welcome component
//   return (
//     <div className="Welcome">
//       {/* if the 'name' prop exists, render it on the screen */}
//       <h3>Welcome {props.name}!</h3>
//       {/* if this component has children, render them here */}
//       {props.children}
//     </div>
//   );
// }

// componentBox class styles a component into a box
// Welcome class identifies this component
// function Welcome(props) {
// return (
// <div className="componentBox">
// <h3>Welcome {props.name}!</h3>
// <h3 style={{color: 'blue', textTransform: 'uppercase'}}>Welcome!</h3>
// </div>
// )
// }


function App() {
  const [count, setCount] = useState(0);

// object storing comment data - passed as props;
// const comment = {
// date: new Date(),
// text: 'I hope you enjoy learning React!',
// author: // author is also an object.
// name: 'Hello Kitty',
// avatarUrl: 'https://placecats.com/g/64/64',
// },
// };

// const author = {
// name: 'Hello Kitty',
// avatarUrl: 'https://placecats.com/g/64/64',
// },


return (

  // const spiderman = {
  //   name: "Spiderman",
  //   alterEgo: "Peter Parker",
  //   catchPhrase: "With great power comes great responsibility",
  // };

  // // single parent <div> element
  // const spideyJSX = (
  //   <div>
  //     <h3>{spiderman.name}</h3>
  //     <blockquote>{spiderman.catchPhrase}</blockquote>
  //     <cite>{spiderman.alterEgo}</cite>
  //   </div>
  // );


 
  // <PropsDisplayer/>

    // <PropsDisplayer myProp="first prop"/>
    // <PropsDisplayer prop1="first" prop2="second" prop3={3}/>

//  <PropsDisplayer name="Harry Styles" age={29}/> 
// Array prop value - uses curly braces */}
//  <PropsDisplayer pets={["cat", "dog", "goldfish"]}/> */ 
// {/* Variable prop values - uses curly braces */}
//  <PropsDisplayer reactLogo={reactLogo} buttonCount={count}/> */
// {/* <City name="Sydney" /> */}
//  <City name="Melbourne" state="VIC" /> */}{/* <City name="Chicago" state="Illinois" country="USA" />  */}
/* Everything in between <City> and </City> is passed as props.children
*/


// <City name="Newcastle">
// <div>Newcastle is a harbour city in the Australian state of New South
// Wales.</div>
// <div><strong>Population:</strong> 322,278 (2016)</div>
// </City>

// <Pet type="dog" name="Rex" colour="brown" /> */}
//  <Pet type="dog" name="Rex" colour="brown" /> 
// <Greeting>
//   <div> He was a short man that smoked continuously!</div>
//   <p><strong> He always fell asleep infront of the TV at night</strong></p>
// </Greeting> //

// <FullName first="Kendrick" last="Lamar" /> */}

// {/* <ComplexComment author={comment.author}
// date={comment.date}
// text={comment.text}/> */}

// {/* <Comment author={comment.author} date={comment.date} text={comment.text} /> */}

// {/* <Comment author={author} text="randam text"  date={new Date()} /> */}

// {/* render the Callout component with FullName as children /> */}

// <Callout title="Nested React Component title"
// message="Simple message with a fancy box applied via composition">
// <FullName first="Elon" last="Musk" />
// </Callout>


// {/* <MoviesList /> */}

// < MoodChanger />

<BigCats />

)
}

export default App

