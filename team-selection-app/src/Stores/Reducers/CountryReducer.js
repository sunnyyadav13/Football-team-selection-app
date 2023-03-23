import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: 0,
    CountryData: [],
    status: '',
}
export const CountrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        settingStatus:(state,action)=>{
            state.status=action.payload;
        },
        settingData:(state,action)=>{
            state.CountryData=action.payload;
        }
    }
})
export const { settingStatus,settingData} = CountrySlice.actions
export default CountrySlice.reducer;
//*************************************************************************************

export function fetchCountry(){

    return async function fetchCountryThunk(dispatch, getState) {
        // const curr_data = getState().counter.data;
        // console.log(curr_data);
        dispatch(settingStatus("Loading Country"))
        try {
            const res = await fetch("http://localhost:3006/country")
            const data = await res.json();
            dispatch(settingData(data.areas));
            dispatch(settingStatus("Fullfilled Country"))
        }
        catch (error) {
            console.log(error);
            dispatch(settingStatus("Error in Country Api Call"));
        }

    }
}


