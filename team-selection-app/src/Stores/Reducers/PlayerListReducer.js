import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// for handling the player list after click on add or remove button
const initialState = {
    value: 4,
    playerListCount:0,
    PlayerList: [],
    PlayerListStatus: '',
    BenchList: [],
    benchListCount:0,
    BenchListStatus: '',
}
export const PlayerListSlice = createSlice({
    name: 'PlayerList',
    initialState,
    reducers: {
        settingPlayerListData: (state, action) => {
            state.PlayerList.push(action.payload);
            
        },
        settingPlayerListStatus: (state, action) => {
            state.PlayerListStatus = action.payload
        },
        setupPlayerListData: (state, action) => {
            state.PlayerList = action.payload
        },
        settingBenchListData: (state, action) => {
            state.BenchList.push(action.payload);
        },
        settingBenchListStatus: (state, action) => {
            state.BenchListStatus = action.payload
        },
        setupBenchListData: (state, action) => {
            state.BenchList = action.payload
        },
        updatingPlayerListCount:(state, action) => {
            state.playerListCount++;
        },
        updatingBenchListCount:(state, action) => {
            state.benchListCount++;
        },
    }
})
export const { settingPlayerListData, settingPlayerListStatus, setupPlayerListData,
    settingBenchListData, settingBenchListStatus, setupBenchListData,updatingPlayerListCount,updatingBenchListCount } = PlayerListSlice.actions
export default PlayerListSlice.reducer;


