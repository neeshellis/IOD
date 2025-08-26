import { useState } from 'react';



function AddCatForm({onAddCat}) {

const [name, setName] = useState('')
const [latinName, setLatinName] = useState('')
const [image, setImage] = useState('')
// ++ add support for the synopsis field as well, here and below

const handleSubmit = (e) => {
e.preventDefault();
onAddCat({name:name, latinName:latinName, image:image})
}

return (
<div className="AddCatForm componentBox">
<form onSubmit={handleSubmit}>
<label>Name:
<input name="Name" value={name}
onChange={(e) => setName(e.target.value)} />
</label>
<label>Latin Name:
<input name="Latin Name" value={latinName}
onChange={(e) => setLatinName(e.target.value)} />
</label>
<label>Cat 
<input name="Cat Image" value={image}
onChange={(e) => setImage(e.target.value)} />
</label>
<button>Add New Cat</button>
</form>
</div>
)

}
export default AddCatForm
