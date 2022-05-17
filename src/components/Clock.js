const Clock = ({mins, secs}) => {
    return (
        <div className='clock'>
            {mins}:{secs}
        </div>
    )
}

export default Clock