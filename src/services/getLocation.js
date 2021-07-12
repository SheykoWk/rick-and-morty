import axios from 'axios'
const getLocation = (location) => {
    const URL_Location = `https://rickandmortyapi.com/api/location/${location}`;
    const res = axios(URL_Location)
    const promise = res.then((info) => info.data)
    return promise
}
export default getLocation