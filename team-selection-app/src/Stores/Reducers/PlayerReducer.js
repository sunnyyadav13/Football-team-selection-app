import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    value: 3,
    PlayerData: [],
    PlayerStatus: ''
}
export const PlayerSlice = createSlice({
    name: 'Player',
    initialState,
    reducers: {
        settingPlayerData: (state, action) => {
            state.PlayerData = action.payload
        },
        settingPlayerStatus: (state, action) => {
            state.PlayerStatus = action.payload
        },
        addingPlayerData:(state,action)=>{
            state.PlayerData.push(action.payload);
        }

    }
})
export const { settingPlayerData, settingPlayerStatus, addingPlayerData } = PlayerSlice.actions
export default PlayerSlice.reducer;
//*************************************************************************************

export function fetchPlayers() {

    return async function fetchPlayersThunk(dispatch, getState) {
        // const curr_data = getState().counter.data;
        // console.log(curr_data);
        dispatch(settingPlayerStatus("Loading Players Data"))
        try {
            const res = await fetch("http://localhost:3006/players")
            const data = await res.json();
            dispatch(settingPlayerData(data));
            dispatch(settingPlayerStatus("Fullfilled Players"))
        }
        catch (error) {
            console.log(error);
            dispatch(settingPlayerStatus("Error in Players Api Call"));
        }

    }
}

