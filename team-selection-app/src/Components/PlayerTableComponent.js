import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPlayers } from '../Stores/Reducers/PlayerReducer';
import { settingPlayerListData, settingPlayerListStatus, settingBenchListData, settingBenchListStatus, updatingBenchListCount, updatingPlayerListCount }
    from '../Stores/Reducers/PlayerListReducer';
import { settingPlayerData } from '../Stores/Reducers/PlayerReducer';
import swal from 'sweetalert';
//players data table

function PlayerTableComponent() {

    const dispatch = useDispatch();
    const playerDataResponse = useSelector(state => state.playerReducer.PlayerData);
    const PlayerList = useSelector(state => state.playerListReducer.PlayerList);
    const BenchList = useSelector(state => state.playerListReducer.BenchList);

    let PlayerListCount=useSelector(state=> state.playerListReducer.playerListCount);

    

    useEffect(() => {
        dispatch(fetchPlayers());
    }, [])

    const addPlayerHandler = (player) => {
        let Midfielder = 0;
        let Defender = 0;
        let Goalkeeper = 0;
        let Striker = 0;
        if (PlayerList.length < 11) {
            PlayerList.map((el) => {
                if (el.position === "Midfielder") {
                    Midfielder += 1;
                }
                else if (el.position === "Defender") {
                    Defender += 1;
                }
                else if (el.position === "Goalkeeper") {
                    Goalkeeper += 1;
                }
                else if (el.position === "Striker") {
                    Striker += 1;
                }
            });

            if (player.position === "Goalkeeper") {
                if (Goalkeeper < 1) {
                    dispatch(settingPlayerListData(player));  //player list table
                    // dispatch(deletingPlayerDataFromTable(player));
                    const updatedPlayerDataResponse = playerDataResponse.filter((pl) => pl.id !== player.id)
                    dispatch(settingPlayerData(updatedPlayerDataResponse));  //Player table
                    dispatch(updatingPlayerListCount);
                }
                else {
                    // alert("Player Table :Goalkeeper cannot be greater than 1");
                    swal("Issue!", "Player Table :Goalkeeper cannot be greater than 1", "error");

                }
            }
            else if (player.position === "Midfielder") {
                if (Midfielder <= 2) {
                    dispatch(settingPlayerListData(player));  //player list table
                    // dispatch(deletingPlayerDataFromTable(player));
                    const updatedPlayerDataResponse = playerDataResponse.filter((pl) => pl.id !== player.id)
                    dispatch(settingPlayerData(updatedPlayerDataResponse));  //Player table
                }
                else {
                    // alert("Player Table :Midfielder cannot be greater than 4")
                    swal("Issue!", "Player Table :Midfielder cannot be greater than 4", "error");
                }
            }
            else if (player.position === "Defender") {
                if (Defender <= 3) {
                    dispatch(settingPlayerListData(player));  //player list table
                    // dispatch(deletingPlayerDataFromTable(player));
                    const updatedPlayerDataResponse = playerDataResponse.filter((pl) => pl.id !== player.id)
                    dispatch(settingPlayerData(updatedPlayerDataResponse));  //Player table
                }
                else {
                    // alert("Player Table :Defender cannot be greater than 4")
                    swal("Issue!", "Player Table :Defender cannot be greater than 4", "error");
                }
            }
            else if (player.position === "Striker") {
                if (Striker <= 2) {
                    dispatch(settingPlayerListData(player));  //player list table
                    // dispatch(deletingPlayerDataFromTable(player));
                    const updatedPlayerDataResponse = playerDataResponse.filter((pl) => pl.id !== player.id)
                    dispatch(settingPlayerData(updatedPlayerDataResponse));  //Player table
                }
                else {
                    // alert("Player Table :Striker cannot be greater than 3")
                    swal("Issue!", "Player Table :Striker cannot be greater than 3", "error");
                    
                }
            }
        }
        else {
            // alert("Player Table :Team Player cannot be greater than 11")
            swal("Issue!", "Player Table :Team Player cannot be greater than 11", "error");
        }





        dispatch(settingPlayerListStatus("player data is set in PlayerList Table & data is deleted from table"))
    }
    const addBenchHandler = (player) => {
        if (BenchList.length < 4) {
            dispatch(settingBenchListData(player)); //Bench List table
            // dispatch(deletingPlayerDataFromTable(player));
            const updatedPlayerDataResponse = playerDataResponse.filter((pl) => pl.id !== player.id)
            dispatch(settingPlayerData(updatedPlayerDataResponse));//Player table

            dispatch(updatingBenchListCount());

            dispatch(settingBenchListStatus("Bench player data is set in BenchList Table & data is deleted from table"))
        }
        else {
            // alert("Player Table Bench List: cannot add more than 4 player")
            swal("Issue!", "Player Table Bench List: cannot add more than 4 player", "error");
        }

    }

    return (
        <div>
        <h4 className='allPlayerList'>All Player List </h4>
        <div className='table-responsive'>
            
            <table className="table ">
                <thead className='table-head'>
                    <tr className='table-primary'>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Team/Bench</th>
                    </tr>
                </thead>
                <tbody >
                    {playerDataResponse.map((player) => {
                        if (player.position === "Midfielder") {
                            return (
                                <tr key={player.id} className='table-secondary'>
                                    <th scope="row">{player.id}</th>
                                    <td>{`${player.first_name} ${player.last_name}`}</td>
                                    <td>{player.position}</td>
                                    <td><button className="btn btn-primary" onClick={() => addPlayerHandler(player)}>Team</button>
                                        <button className="btn btn-warning" onClick={() => addBenchHandler(player)}>Bench</button>
                                    </td>
                                </tr>
                            )
                        }
                        else if (player.position === "Defender") {
                            return (
                                <tr key={player.id} className='table-success'>
                                    <th scope="row">{player.id}</th>
                                    <td>{`${player.first_name} ${player.last_name}`}</td>
                                    <td>{player.position}</td>
                                    <td><button className="btn btn-primary" onClick={() => addPlayerHandler(player)}>Team</button>
                                        <button className="btn btn-warning" onClick={() => addBenchHandler(player)}>Bench</button>
                                    </td>
                                </tr>
                            )
                        }
                        else if (player.position === "Goalkeeper") {
                            return (
                                <tr key={player.id} className='table-warning'>
                                    <th scope="row">{player.id}</th>
                                    <td>{`${player.first_name} ${player.last_name}`}</td>
                                    <td>{player.position}</td>
                                    <td><button className="btn btn-primary" onClick={() => addPlayerHandler(player)}>Team</button>
                                        <button className="btn btn-warning" onClick={() => addBenchHandler(player)}>Bench</button>
                                    </td>
                                </tr>
                            )
                        }
                        else if (player.position === "Striker") {
                            return (
                                <tr key={player.id} className='table-info'>
                                    <th scope="row">{player.id}</th>
                                    <td>{`${player.first_name} ${player.last_name}`}</td>
                                    <td>{player.position}</td>
                                    <td><button className="btn btn-primary" onClick={() => addPlayerHandler(player)}>Team</button>
                                        <button className="btn btn-warning" onClick={() => addBenchHandler(player)}>Bench</button>
                                    </td>
                                </tr>
                            )
                        }

                    })}


                </tbody>
            </table>
        </div>
        </div>
    )
}

export default PlayerTableComponent