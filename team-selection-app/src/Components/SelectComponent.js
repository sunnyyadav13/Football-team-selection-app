import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTeams } from '../Stores/Reducers/TeamReducer'; 
import { fetchCountry } from '../Stores/Reducers/CountryReducer';

function SelectComponent() {

    const dispatch = useDispatch();
    const CountryDataResponse = useSelector(state => state.countryReducer.CountryData);
    const TeamsDataResponse = useSelector(state => state.teamReducer.TeamsData);

    useEffect(() => {
        dispatch(fetchCountry());
        dispatch(fetchTeams());
    }, [])

    return (
        <div>
            <div className="container px-4">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
                                <option defaultValue={0}>Country List</option>
                                {/* {console.log(CountryDataResponse)} */}
                                {CountryDataResponse.map((country) => {
                                    return (
                                        <option key={country.id} value={country.id}>{country.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option defaultValue={0}>Teams List</option>
                                {TeamsDataResponse.map((teams) => {
                                    return (
                                        <option key={teams.code} value={teams.code}>{teams.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectComponent