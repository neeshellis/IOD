
// Module 6 Exercise 3



// function Emoji() {
//   return (
//     <div className="Emoji">
//       <img 
//         src={"https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f601.png"} alt={"Happy Emoji"}/>
//     </div>
//   )
// }
// export default Emoji


import { useState } from "react";

function Emoji() {
    const [mood, setMood] = useState("😄")
    return(
        <div className="Emoji componentBox">
            Happy Days: {mood}
            <br />
            <button onClick={() => setMood('😉')}>
            Cheeky Wink
            </button>
            <button onClick={() => setMood('😭')}>
            Its Monday!
            </button>
        </div>
    )
}

export default Emoji   

