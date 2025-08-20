// separate component for displaying each cat
function Cat({id, name, latinName}) {
return (


<li>
<h3>{id}</h3> <span>({name})</span>
<div>{latinName}</div>
</li>
)
}

export default Cat;