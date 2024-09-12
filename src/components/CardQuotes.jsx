import phrases from '../utils/phrases.json'
import elementRandom from '../utils/elementRandom'
import { useState } from 'react';
import colors from '../utils/colors.json'

function CardQuotes() {

    const arrColors = Object.keys(colors);

    const [randomColors, setRandomColors] = useState(elementRandom(arrColors));

    const [randomPhrases, setRandomPhrases] = useState(elementRandom(phrases));

    const handleNext = () => {
        setRandomColors(elementRandom(arrColors));
        setRandomPhrases(elementRandom(phrases));
    }

    return (
        <div className='back' style={{ background: randomColors }}>
            <h1 style={{ color: randomColors }}>+hundred QUOTES</h1>
            <div className='card' style={{ border: `.5rem double ${randomColors}` }}>
                <p>{randomPhrases.quote}</p>
                <small>{randomPhrases.author}</small>
                <button onClick={handleNext} style={{ backgroundColor: randomColors }}>
                    <i style={{ color: randomColors }} class="fa-duotone fa-solid fa-angles-right fa-xl"></i>
                </button>
            </div>
        </div >
    )
}

export default CardQuotes