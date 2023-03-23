import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: 1,
    TeamsData:[],
    TeamStatus:''
}
export const TeamSlice = createSlice({
    name: 'Team',
    initialState,
    reducers: {
        settingTeamData:(state,action)=>{
            state.TeamsData=action.payload
        },
        settingTeamStatus:(state,action)=>{
            state.TeamStatus=action.payload
        }
    }
})
export const { settingTeamData,settingTeamStatus} = TeamSlice.actions
export default TeamSlice.reducer;
//*************************************************************************************

export function fetchTeams(){

    return async function fetchTeamsThunk(dispatch, getState) {
        // const curr_data = getState().counter.data;
        // console.log(curr_data);
        dispatch(settingTeamStatus("Loading Teams Data"))
        try {
            const res = await fetch("http://localhost:3006/teams")
            const data = await res.json();
            dispatch(settingTeamData(data.clubs));
            dispatch(settingTeamStatus("Fullfilled Country"))
        }
        catch (error) {
            console.log(error);
            dispatch(settingTeamStatus("Error in Country Api Call"));
        }

    }
}

