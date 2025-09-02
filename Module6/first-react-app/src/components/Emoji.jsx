
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


// import { useState } from "react";
import { useContext } from "react";
import { MyEmojiContext} from "../context/MyEmojiProvider";

function Emoji() {
    //const [mood, setMood] = useState("😄")
    const {emoji, setEmoji, emojis } = useContext(MyEmojiContext)

    return(
        <div className="Emoji componentBox">
            Happy Days: {emoji}
            <br />
            <button onClick={() => setEmoji(emojis.smile.face)}>
            Cheeky Wink
            </button>
            <button onClick={() => setEmoji(emojis.wink.face)}>
            Its Monday!
            </button>
        </div>
    )
}

export default Emoji   

// ThemeToggleButton.jsx
// import { useContext } from "react";
// import { MyThemeContext, themes } from "../context/MyThemeProvider";

// export default function ThemeToggleButton() {
//   const { darkMode, setTheme } = useContext(MyThemeContext);
//   return (
//     <button
//       type="button"               
//       onClick={() => setTheme(darkMode ? themes.light : themes.dark)}
//     >
//       {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//     </button>
//   );
// }