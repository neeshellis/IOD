// add this to a new file City.jsx in the components folder
// destructures props object into 3 variables, two with defaults

// example 1.
// function City({ name, state = "NSW", country = "Australia" }) {
//   return (
//     <div className="City componentBox">
//       <strong>{name}</strong> is in {state}, {country}
//     </div>
//   );
// }


// example 2. Call the function first then call the children
function City({name, state = 'NSW', country = 'Australia', children}) {
// destructuring the props.children property as well
return (
<div className="City">
<strong>{name}</strong> is in {state}, {country}
{children}
</div>
)
}
export default City;
