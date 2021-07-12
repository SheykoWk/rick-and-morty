import { useEffect, useState } from 'react'
import getResident from '../services/getResident'
const ResidentInfo = ( {url} ) => {
    const [name , setName] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');
    const [origin, setOrigin] = useState('');
    const [episodes, setEpisodes] = useState('');

    useEffect(() => {
        if(url){
            getResident(url).then((res) => {
                console.log(res.data)
                setName(res.data.name);
                setImage(res.data.image);
                setStatus(res.data.status);
                setOrigin(res.data.origin.name)
                setEpisodes(res.data.episode.length)
            })
        }
    }, [url])

    
    return(
        <div className='resident-info__card'>
            <div className ='resident-info__image'>
                <img className='resident-info__image-img' src={image} alt=''/>
                <div className='ripple-cont'></div>
            </div>
            <div className='resident-info__content'>
                <h6 className='resident-info__status'>{status}</h6>
                <h4 className='resident-info__name'>{name}</h4>
                <h6 className='resident-info__origin'>{origin}</h6>
                <div className='resident-info__footer'>
                    <div className='resident-info__footer-image'>
                        <img src='https://i.pinimg.com/originals/7e/fe/c2/7efec23661e049e412f92d131ed1d7e2.png' alt=''/>
                    </div>
                    <div className='resident-info__footer-episodes'>
                        {episodes} {(episodes > 1) ? ' episodes' : 'episode'}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResidentInfo