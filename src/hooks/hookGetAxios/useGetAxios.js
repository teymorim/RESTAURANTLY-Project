import axios from "axios";
import { useEffect, useState } from "react";

function useGetAxios(url){
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(response => setData(response.data))
        .catch(error => console.log('error'))
    } , [])
    return data
}
export default useGetAxios