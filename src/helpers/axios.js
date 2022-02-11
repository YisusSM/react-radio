import axios from "axios";

export const getDataSong = async ()=>{
    const res = await axios.get('http://189.176.252.227:2000/status');
    return res;
}

