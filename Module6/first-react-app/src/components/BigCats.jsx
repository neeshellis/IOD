 import Cat from "./Cat";
 import  AddCatForm  from './AddCatForm';
 import { useState } from 'react';


function BigCats() {
    const cats = [
{ 
id: 1,
name: "Cheetah",
latinName: 'Acinonyx jubatus',
image: "/images/cheetah.jpeg "
},

{
id: 2,
name: "Cougar",
latinName: 'Puma concolor',
image: "images/cougar.jpeg"
},

{
id: 3,
name: 'Jaguar', 
latinName: 'Panthera onca',  
image: "images/jaguar.jpeg "
},

{
id: 4,
name:'Leopard', 
latinName: 'Panthera pardus', 
image: "images/leopard.jpeg"
},

{
id: 5,
name: 'Lion', 
latinName: 'Panthera leo', 
image: "images/lion.jpeg"
},

{
id: 6,
name: 'Snow leopard',
latinName: 'Panthera uncia', 
image: "images/snow-leopard.jpeg"
},

{
id: 7,
name: 'Tiger',
latinName: 'Panthera tigris', 
image: "images/tiger.jpeg"
},

];
    
// const catItems = cats.map(cat => (
// <li key={cat.id}>{cat.name}{cat.latinName}</li>
// ))


// return (
// <div className="BigCats componentBox">
// <ul> 
// { cats.map(cat => (
// <><li>{cat.name}</li>
// <li>{cat.latinName}</li></>
// )) }

// </ul>
// </div>


const [BigCats, setBigCats] =
useState(cats);


const handleDeleteCat = (id) => {
  const filterById = BigCats.filter(cat => cat.id !=id);
  console.log(filterById)
 setBigCats(filterById)
}


const catItems = BigCats.map(cat => (
<Cat key={cat.id} name={cat.name}
latin={cat.latinName} img={cat.image} id={cat.id} deleteCat={handleDeleteCat}/>

))


const handleReverseCats = () => {
// first clone the original, so we don’t mutate it
let newCats = [...BigCats];
newCats.reverse();
setBigCats(newCats); // 3. set updated clone in state
}

const handleSortCats = () => {
// first clone the original, so we don’t mutate it
let newCats = [...BigCats];
newCats.sort((cat1, cat2) => {
  const catname1 = cat1.name.toUpperCase(); // ignore upper and lowercase
  const nameB = cat2.name.toUpperCase(); // ignore upper and lowercase
  if (catname1 < nameB) {
    return -1;
  }
  if (catname1 > nameB) {
    return 1;
}


  return 0;
});

setBigCats(newCats); // 3. set updated clone in state
}


const handleFilterCats = () => {

let filterCats = BigCats.filter(cat => cat.latinName.startsWith("Panthera"));
setBigCats(filterCats)
 }


const handleResetCats = () => {
let resetCats = [...cats];
setBigCats(resetCats)
}


// add this in MoviesList component
const handleAddCat = (newBigCat) => {
// newCat.id = BigCats.length + 1; 
setBigCats([...BigCats, newBigCat])
}

return (


<div className="BigCats">
<ul>
{ catItems }
</ul>
<button onClick={handleReverseCats}>Reverse List</button>
<br/>
<button onClick={handleSortCats}>Sort List</button>
<br/>
<button onClick={handleFilterCats}>Panthera</button> 
<br/>
<button onClick={handleResetCats}>Reset</button>

<AddCatForm onAddCat={handleAddCat}/>

</div>


)
}


export default BigCats

// const catItems = cats.map(cat => (
// <Cat
// key={cat.id} // key prop is required for lists
// id={cat.id}
// name={cat.name}
// latin={cat.latinName}
// img={cat.image}/>
// )
// );


// return (
// <div className="CatList componentBox">
// <ul>{ catItems }</ul>
// </div>
// ) 
// };

