import LocationInfo from "./LocationInfo"

const LocationContainer = ({ location }) => {
    console.log(location)
    return(
        <div className='location-container'>
            <LocationInfo location={location}/>
        </div>
    )
}
export default LocationContainer