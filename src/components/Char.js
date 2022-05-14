import style from './Char.module.css';
const { useState } = require("react");


function Char({char}) {
    const imgPath = char.image;
    const [ charBtnClass, setCharBtnClass ] = useState('')
    const toggleClass = () => { if (charBtnClass === '') {setCharBtnClass('discard')} else { setCharBtnClass('')}}
    return (
        <div className={style.box}>
            <div className={style.boxfront}>
                <img className={style.charImg} src={require(`../imgs/${imgPath}`)} alt={char.descr} /> 
                <p>{char.id}</p>
             </div>
             <button onClick={toggleClass}> X </button>  
        </div>
      
  
     
       
    )
}

export default Char