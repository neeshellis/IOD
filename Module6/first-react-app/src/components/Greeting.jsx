// Lab 1.1

// function Greetings(props) {
//   // convert object to string
//   const stringProps = JSON.stringify(props);
//   return (
//     <div className="PropsDisplayer componentBox">
//       <h2>Hello World!</h2>
//       {/* <h3>{stringProps}</h3> */}
//       {/* <p>Name: {props.name} is {props.age} years old</p> */}
//       {/* what happens if we try to render the object {props} ? */}
//     </div>
//   );
// }
// // export this component so we can import it elsewhere
// export default Greetings;

//  Lab 1.2

// function Greetings(props) {
//   // convert object to string
//   const stringProps = JSON.stringify(props);
//   return (
//     <div className="PropsDisplayer componentBox">
//       {/* <h2>Hello World!</h2> */}
//       <h3>{stringProps}</h3> 
      
//     </div>
//   );
// }
// // export this component so we can import it elsewhere
// export default Greetings;


//  Lab 1.3

function Greetings(props) {
  // convert object to string
//   const stringProps = JSON.stringify(props);
  return (
    <div className="PropsDisplayer componentBox">
    
      {/* <h3>{stringProps}</h3>  */}
     {props.name ? <p>Hello: {props.name}</p> : <p>Hello World</p>} 
   
      
    </div>
  );
}
// export this component so we can import it elsewhere
export default Greetings;



// Lab 1.4


// export this component so we can import it elsewhere
// function Greeting({name, surname = "Skinner", age = "72", children})  {

// return (
// <div className="Greeting">
// <p>My Grandfather <strong>{name}</strong> had a surname <strong>{surname}</strong>, 
// <br/>his was {age} when he died </p>
// {children}
// </div>
// )
// }
// export default Greeting;

