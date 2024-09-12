import phrases from '../utils/phrases.json'
import elementRandom from '../utils/elementRandom'
import { useState } from 'react';
import colors from '../utils/colors.json'
import jonsdesigned from '../assets/jonsdesigned-web.png'

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
                    <i style={{ color: randomColors }} className="fa-duotone fa-solid fa-angles-right fa-xl"></i>
                </button>
            </div>
            <footer>
                <span className="publicity">
                    <img className="logo_image" src={jonsdesigned} alt="Logo de jonsdevsigned" />
                    <span className="jons">Jons</span><span className="dev">dev</span><span className="signed">signed</span>
                </span>
                <p className="developer" style={{ color: randomColors }}>John Forero - 2024</p>
            </footer>
        </div >
    )
}

export default CardQuotes