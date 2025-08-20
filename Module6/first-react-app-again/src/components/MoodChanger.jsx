import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
const [mood, setMood] = useState('happy');

return (
<div className="MoodChanger componentBox">
Current Mood: {mood}
<br/>
<button onClick={() => setMood('tired')}>
    Stay Up Late
</button>
</div>
)
}

export default MoodChanger;