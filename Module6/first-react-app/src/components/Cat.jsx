// function Cat({id, name, latin, img}) {
// return (
// <li>
// <h3>{id}</h3> <span>{name}</span>
// <div>{latin}</div>
// <img src={"https://placecats.com/g/64/64"} alt={name} className="CatImage" />
// </li>
// )
// }

// export default Cat;

function Cat({id, name, latin, img, deleteCat}) {

return (
<li>
<h3>{id}</h3> <span>{name}</span>
<div>{latin}</div>
<img src={img} alt={name} className="CatImage" />
<br/>
<button onClick={() => deleteCat(id)}>Delete</button>
</li>
)
}

export default Cat;


