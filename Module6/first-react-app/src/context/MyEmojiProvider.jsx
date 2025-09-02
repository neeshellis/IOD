import React from "react";

// emoji options with specific colour values
export const emojis = {
    smile: { face: "😄"},
    wink: { face: "😉" },
    
};

export const MyEmojiContext = React.createContext({
    emoji: emojis.smile,
    setEmoji: () => {},
    wink: false,
});


export default function MyEmojiProvider(props) {
const [emoji, setEmoji] = React.useState(emojis.smile.face);

// helper boolean to tell if we’re currently in dark mode

const winkMode = emoji.background === emojis.wink.face;
return (
<MyEmojiContext.Provider value={{emoji, setEmoji, emojis}}>
{props.children}
</MyEmojiContext.Provider>
);
}
// ++ Try to use this context to style some existing components
// ++ Try to add a component with a button/checkbox to switch themes

// provider wrapper. uses its own state to track which theme is in use
// use it in App.jsx like <MyThemeProvider>...</MyThemeProvider>