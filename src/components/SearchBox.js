import { useState } from "react"

const SearchBox = ({ handleSearch }) => {
    //initial state
    const [location, setLocation] = useState('')
    return(
        <div className='search-wrap'>
            <div className='search-box'>
            <input type='text' placeholder='search...' onChange={(e) => setLocation(e.target.value)}/>
            <button onClick={() => handleSearch(location)}><i class="fas fa-search"></i></button>
            </div>
        </div>
    )
}
export default SearchBox