import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Pet from "./components/Pet";
import FullName from "./components/FullName";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import { FancyBox, Callout } from "./components/FancyBox";
import MoviesList from "./components/MoviesList";
import MoodChanger from "./components/MoodChanger";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";

// // Add this in App.jsx ABOVE the App component
// function ExampleComponent() {
// return (
// <div className="ExampleComponent componentBox">

// <h1>My Example Component</h1>
// <p>My first React component!</p>
// <a href="https://react.dev" target="_blank">
// <img src={reactLogo} className="logo react" alt="React logo" />
// </a>
// </div>
// )
// }

// function Welcome(props) {
// return (
// <div className="Welcome">
// {/* if the 'name' prop exists, render it on the screen */}
// <h3>Welcome {props.name}!</h3>
// {/* if this component has children, render them here */}
// {props.children}
// </div>

// )}

// componentBox class styles a component into a box
// Welcome class identifies this component
// function Welcome(props) {
// return (
// <div className="componentBox">
// <h3>Welcome {props.name}!</h3>
// <h3 style={{color: 'blue', textTransform: 'uppercase'}}>Welcome!</h3> {/* style object directly in JSX */}
// </div>
// )
// }

function App() {
  const [count, setCount] = useState(0);

  // const spiderman = {
  //   name: "Spiderman",
  //   alterEgo: "Peter Parker",
  //   catchPhrase: "With great power comes great responsibility",
  // };

  // const spideyJSX = (
  //   <div>
  //     <h3>{spiderman.name}</h3>
  //     <blockquote>{spiderman.catchPhrase}</blockquote>
  //     <cite>{spiderman.alterEgo}</cite>
  //   </div>
  // );

  // object storing comment data - passed as props
  // const comment = {
  // date: new Date(),
  // text: 'I hope you enjoy learning React!',
  // author: { // author is also an object
  // name: 'Hello Kitty',
  // avatarUrl: 'https://placecats.com/g/64/64'
  // },}

  // const author = {
  // name: 'Hello Kitty',
  // avatarUrl: 'https://placecats.com/g/64/64'}

  return (
    // <div className="App">{spideyJSX}</div>
    //  <ExampleComponent/>
    //  <Welcome name="students">
    //  </Welcome>
    // <PropsDisplayer />
    // <PropsDisplayer myProp="first prop"/>
    // <PropsDisplayer prop1="first" prop2="second" prop3={3}/>
    // <PropsDisplayer name="Harry Styles" age={29} height={5}/>
    // <City name="sydney" />
    // <City name="Melbourne" state="VIC" />
    // <City name="Chicago" state="Illinois" country="USA" />
    // <City name="Newcastle">
    // {/* <div>Newcastle is a harbour city in the Australian state of New South
    // Wales.</div>
    // <div><strong>Population:</strong> 322,278 (2016)</div> */}
    // <p>hi</p>
    // </City>
    //<Pet type="dog" name="Rex" colour="brown" />
    //<FullName first="Kendrick" last="Lamar" />
    //<ComplexComment author={comment.author}date={comment.date}text={comment.text}/>
    //<Comment author={author} text="random text" date={new Date()} />
    //<Callout title="Nested React Component title"message="Simple message with a fancy box applied via composition and styling"><FullName first="Elon" last="Musk" /></Callout>
    <MoviesList />
    // <MoodChanger />
    // <BirthdayTranslator />
    // <Weather />
  );
}

export default App;
