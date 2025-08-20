import BigCats from "./BigCats";

function BigCats() {
    const cats = [
{ 

id: 1,
name: "Cheetah",
latinName: 'Acinonyx jubatus',
},

{
id: 2,
name: "Cougar",
latinName: 'Puma concolor',},

{
id: 3,
name: 'Jaguar', 
latinName: 'Panthera onca', },
 
{
id: 4,
name:'Leopard', 
latinName: 'Panthera pardus', },

{
id: 5,
name: 'Lion', 
latinName: 'Panthera leo', },

{
id: 6,
name: 'Snow leopard',
latinName: 'Panthera uncia', },

{
id: 7,
name: 'Tiger',
latinName: 'Panthera tigris', },

];
    

const catItems = cats.map(cat => (
<Cat
key={cat.id} // key prop is required for lists
title={cat.name}
year={cat.latinName}/>
)
);

return (

<div className="CatList">
<ul>{ catItems }</ul>
</div>
) 

}
export default BigCats;




//  add image property