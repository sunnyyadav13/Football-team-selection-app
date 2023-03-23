import CountrySlice from './Reducers/CountryReducer'
import TeamSlice from './Reducers/TeamReducer';
import PlayerSlice from './Reducers/PlayerReducer';
import PlayerListReducer from './Reducers/PlayerListReducer';

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    countryReducer: CountrySlice,
    teamReducer: TeamSlice,
    playerReducer:PlayerSlice,
    playerListReducer:PlayerListReducer,  
  }
})

export default store;