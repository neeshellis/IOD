import { useState} from 'react';

// const phrases = new Map([
// ['english', 'Happy Birthday'],
// ['german', 'Alles Gute zum Geburtstag'],
// ['spanish', 'Feliz Cumpleaños']
// ]);
// function BirthdayTranslator() {
// const [currentLanguage, setCurrentLanguage] = useState('english');

// const [phrase, setPhrase] = useState(phrases.get('english'))

// const handleChangeLanguage = (lang) => {
// setCurrentLanguage(lang);
// setPhrase(phrases.get(lang));
// }
// return (
// <div className="BirthdayTranslator componentBox">

// <h3>{phrase}! ({currentLanguage})</h3>
// <button onClick={() => handleChangeLanguage('english')}>English</button>

// <button onClick={() => handleChangeLanguage('german')}>German</button>

// <button onClick={() => handleChangeLanguage('spanish')}>Spanish</button>
// </div>
// )
// }

// const phrases = new Map([
// ['english', 'Happy Birthday'],
// ['englishss', 'howdy'],
// ['german', 'Alles Gute zum Geburtstag'],
// ['spanish', 'Feliz Cumpleaños']
// ]);

// function BirthdayTranslator() {

// const [currentPhrase, setCurrentPhrase] = useState(
// {lang: 'english', phrase: 'Happy Birthday'}
// )
// const handleChangeLanguage = (newlang) => {
// setCurrentPhrase({lang: newlang, phrase:
// phrases.get(newlang)})
// }
// return (
// <div className="BirthdayTranslator componentBox">
// <h3>{currentPhrase.phrase}! ({currentPhrase.lang})</h3>
// <button onClick={() => handleChangeLanguage('english')}>English</button>

// <button onClick={() => handleChangeLanguage('englishss')}>Englishss</button>

// <button onClick={() => handleChangeLanguage('german')}>German</button>

// <button onClick={() => handleChangeLanguage('spanish')}>Spanish</button>

// </div>
// )
// }

const phrases = new Map([
['english', 'Happy Birthday'],
['englishss', 'howdy'],
['german', 'Alles Gute zum Geburtstag'],
['spanish', 'Feliz Cumpleaños']
]);


function BirthdayTranslator() {
const [currentLanguage, setCurrentLanguage] = useState('english');
const handleChangeLanguage = (newlang) => {
setCurrentLanguage(newlang)
}
return (
<div className="BirthdayTranslator componentBox">
<h3>{phrases.get(currentLanguage)}!
({currentLanguage})</h3>
<button onClick={() =>
handleChangeLanguage('english')}>English</button>
<button onClick={() =>
handleChangeLanguage('german')}>German</button>
<button onClick={() =>
handleChangeLanguage('spanish')}>Spanish</button>
</div>
)
}
// It is common to adjust your state values during development
// as you gain experience and grow the complexity of your code.


export default BirthdayTranslator