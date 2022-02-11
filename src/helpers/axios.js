import axios from "axios";

export const getDataSong = async ()=>{
    const res = await axios.get('https://low-radio-node.herokuapp.com/status');
    return res;
}

