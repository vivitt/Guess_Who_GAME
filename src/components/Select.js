const Select = ({options}) => {
    return (
        <select>
            {options.map(item => (<option>{item}</option>))}
            
        </select>
    )
}

export default Select