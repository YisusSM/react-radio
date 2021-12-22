import axios from "axios";

export const getDataSong = async ()=>{
    const res = await axios.get('http://187.147.8.112:2000/status');
    return res;
}

