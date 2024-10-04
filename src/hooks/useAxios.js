import {useState} from 'react';
import axios from 'axios';

const useAxios = (initialCards = [], url) => {
    const [res, setRes] = useState(initialCards);

    const getResData = async (extraUrl='') => {
        const response = await axios.get(`${url}${extraUrl}`);
        setRes(d => [...d, response.data]);
    }

    return [res, getResData];
}



export default useAxios;
