const { useState } = require("react");

function Char({char}) {
    const imgPath = char.image;
    const [ charBtnClass, setCharBtnClass ] = useState('')
    const toggleClass = () => { if (charBtnClass === '') {setCharBtnClass('discard')} else { setCharBtnClass('')}}
    return (
        <div>
            <button onClick={toggleClass}  >
            <div className={charBtnClass}>
            <img className="charImg" src={require(`../imgs/${imgPath}`)} alt={char.descr}/>
        <p>{char.id}</p>
        </div>
        </button>
        </div>
    )
}

export default Char