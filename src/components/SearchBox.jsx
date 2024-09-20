

const SearchBox = ({value, onChange}) => {
    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <>
        <label> 
           Find contacts by name<br></br>
            <input type="text" 
            value={value}
            onChange={handleChange}
            />
        </label>
        </>
    )
}
export default SearchBox;
