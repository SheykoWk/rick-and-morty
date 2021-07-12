import SearchContainer from './SearchContainer';
import getLocation from '../services/getLocation';
import { useEffect, useState } from 'react';
import LocationContainer from './LocationContainer';
import ResidentContainer from './ResidentContainer';

const RaMContainer = () =>{
    //random location
    
    //initial starte
    const [location, setLocation] = useState()
    const [list, setList] = useState([])



    useEffect(() => {
        let random = parseInt(Math.floor(Math.random() * 108))
        getLocation(random).then((res) => {
            setList(res.residents)
            console.log(res)
        })
    },[])
    
    useEffect(() => {
        if(location){
            getLocation(location).then((res) =>{
                console.log(res.results[0])
                setList(res.results[0].residents)
            })
        }
    }, [location])
    const handleSearch = (info) =>{
        setLocation(`?name=` + info)
    }
    return(
        <div>
            <SearchContainer handleSearch={handleSearch}/>
            <LocationContainer location={location}/>
            <ResidentContainer data={list}/>
        </div>
    )
}
export default RaMContainer