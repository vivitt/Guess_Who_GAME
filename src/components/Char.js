

function Char({char}) {
    const imgPath = char.image;
    return (
        <div>
            {/* <img src={require(imgPath)} alt={char.descr}/> */}
        <p>{char.image}</p>
        </div>
    )
}

export default Char