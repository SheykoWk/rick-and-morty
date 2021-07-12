import SearchBox from "./SearchBox"
const SearchContainer = ({handleSearch}) => {
    return(
        <div className='search-container'>
            <div className='header'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png' alt='' className='logo-image'/>
            </div>
            <div className='search-content'>
                <div className='search-container__left'>
                    <h1>Rick & <br/>Morty API</h1>
                    <span className='separator'></span>
                    <h3>Find your favorite rick and morty characters</h3>
                    <SearchBox handleSearch={handleSearch}/>
                </div>
                <div className='search-container__right'>
                    <img src='https://www.pinclipart.com/picdir/big/134-1341810_clipart-drinks-party.png' alt=''/>
                </div>
            </div>
        </div>
    )
}
export default SearchContainer;