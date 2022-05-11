

function Char({char}) {
    const imgPath = char.image;
    return (
        <div>
            <button>
            <img className="charImg" src={require(`../imgs/${imgPath}`)} alt={char.descr}/>
        <p>{char.id}</p>
        </button>
        </div>
    )
}

export default Char