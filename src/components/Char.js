

function Char({char}) {
    const imgPath = char.image;
    return (
        <div>
            <img className="charImg" src={require(`../imgs/${imgPath}`)} alt={char.descr}/>
        <p>{char.image}</p>
        </div>
    )
}

export default Char