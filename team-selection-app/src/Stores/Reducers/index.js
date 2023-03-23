// import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//     value: 11,
//     CountryData: [],
//     status: '',
//     TeamsData:[],
//     TeamStatus:''
// }
// export const CountrySlice = createSlice({
//     name: 'country',
//     initialState,
//     reducers: {
//         settingStatus:(state,action)=>{
//             state.status=action.payload;
//         },
//         settingData:(state,action)=>{
//             state.CountryData=action.payload;
//         },
//         settingTeamData:(state,action)=>{
//             state.TeamsData=action.payload
//         },
//         settingTeamStatus:(state,action)=>{
//             state.TeamStatus=action.payload
//         }
//     }
// })
// export const { settingStatus,settingData,settingTeamData,settingTeamStatus} = CountrySlice.actions
// export default CountrySlice.reducer;
// //*************************************************************************************

// export function fetchCountry(){

//     return async function fetchCountryThunk(dispatch, getState) {
//         // const curr_data = getState().counter.data;
//         // console.log(curr_data);
//         dispatch(settingData("Loading Country"))
//         try {
//             const res = await fetch("http://localhost:3006/country")
//             const data = await res.json();
//             dispatch(settingData(data.areas));
//             dispatch(settingStatus("Fullfilled Country"))
//         }
//         catch (error) {
//             console.log(error);
//             dispatch(settingStatus("Error in Country Api Call"));
//         }

//     }
// }

// export function fetchTeams(){

//     return async function fetchTeamsThunk(dispatch, getState) {
//         // const curr_data = getState().counter.data;
//         // console.log(curr_data);
//         dispatch(settingTeamStatus("Loading Teams Data"))
//         try {
//             const res = await fetch("http://localhost:3006/teams")
//             const data = await res.json();
//             dispatch(settingTeamData(data.clubs));
//             dispatch(settingTeamStatus("Fullfilled Country"))
//         }
//         catch (error) {
//             console.log(error);
//             dispatch(settingTeamStatus("Error in Country Api Call"));
//         }

//     }
// }

