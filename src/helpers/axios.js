import axios from "axios";

export const getDataSong = async ()=>{
    const res = await axios.get('http://187.147.23.242:2000/status');
    return res;
}

