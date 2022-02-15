import { getDataSong } from '../helpers/axios';
import { types } from '../types/types';


export const  radioStartGetInfo = () => {
    return async (dispatch) => {
        try {
            const data = await getDataSong();
            dispatch(radioGetInfo(data.data));
        } catch (err) {
            console.log(err);
        }
    }
}

const radioGetInfo = (data) => ({
    type: types.radioGetInfo,
    payload: data
});

