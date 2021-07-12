import { useEffect, useState } from "react"

const LocationInfo = ({location}) => {
    const [name, setName] = useState('')
    const [type, setType] =useState('')
    const [dimension, setDimension] = useState('')
    useEffect(() =>{
        if(location){
            setName(location.name)
            setType(location.type)
            setDimension(location.dimension)
        }
    },[location])
    return(
        <>
            <span>{name}</span>
            <span>{type}</span>
            <span>{dimension}</span>
        </>
    )
}
export default LocationInfo