import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addingPlayerData } from '../Stores/Reducers/PlayerReducer';
import { settingBenchListData, setupPlayerListData } from '../Stores/Reducers/PlayerListReducer';
import swal from 'sweetalert';
// selected player list
function PlayerListComponent() {

    const dispatch = useDispatch();

    const PlayerList = useSelector(state => state.playerListReducer.PlayerList);
    const BenchList = useSelector(state => state.playerListReducer.BenchList);

    

    

    const removePlayerListHandler = (player) => {
        dispatch(addingPlayerData(player));  // to player table
        const updatedPlayerList = PlayerList.filter((pl) => pl.id !== player.id)
        dispatch(setupPlayerListData(updatedPlayerList))   //updating player list table
    }

    const moveToBenchListHandler = (player) => {
        if (BenchList.length < 4) {
            console.log(BenchList.length)
            dispatch(settingBenchListData(player)); // to Bench List table
            const updatedPlayerList = PlayerList.filter((pl) => pl.id !== player.id)
            dispatch(setupPlayerListData(updatedPlayerList))   //updating player list table
        }
        else {
            // alert("PlayerList Bench :cannot add more than 4 element");
            swal("Issue!", "PlayerList Bench :cannot add more than 4 element", "error");
        }


    }

    return (
        <div >
            <h4 className='teamPlayerList'>Team PlayerList</h4>
            <div className='playerListTable '>
                <table className="table ">
                    <thead className='table-head'>
                        <tr className='table-primary'>
                            <th scope="col">#</th>
                            <th scope="col">Team Player Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Remove/Bench</th>
                        </tr>
                    </thead>
                    <tbody >
                        {PlayerList.map((player) => {
                            if (player.position === "Midfielder") {
                                return (
                                    <tr key={player.id} className='table-secondary playerListBody'>
                                        <td>{PlayerList.indexOf(player)+1}</td>
                                        <td>{`${player.first_name} ${player.last_name}`}</td>
                                        <td>{player.position}</td>
                                        <td><button className="btn btn-danger" onClick={() => removePlayerListHandler(player)}>Remove</button>
                                            <button className="btn btn-warning" onClick={() => moveToBenchListHandler(player)} >Bench</button>
                                        </td>
                                    </tr>
                                );
                            }
                            else if (player.position === "Defender") {
                                return (
                                    <tr key={player.id} className='table-success playerListBody'>
                                        <td>{PlayerList.indexOf(player)+1}</td>
                                        <td>{`${player.first_name} ${player.last_name}`}</td>
                                        <td>{player.position}</td>
                                        <td><button className="btn btn-danger" onClick={() => removePlayerListHandler(player)}>Remove</button>
                                            <button className="btn btn-warning" onClick={() => moveToBenchListHandler(player)} >Bench</button>
                                        </td>
                                    </tr>
                                );
                            }
                            else if (player.position === "Striker") {
                                return (
                                    <tr key={player.id} className='table-info playerListBody' >
                                        <td>{PlayerList.indexOf(player)+1}</td>
                                        <td>{`${player.first_name} ${player.last_name}`}</td>
                                        <td>{player.position}</td>
                                        <td><button className="btn btn-danger" onClick={() => removePlayerListHandler(player)}>Remove</button>
                                            <button className="btn btn-warning" onClick={() => moveToBenchListHandler(player)} >Bench</button>
                                        </td>
                                    </tr>
                                );
                            }
                            else if (player.position === "Goalkeeper") {
                                return (
                                    <tr key={player.id} className='table-warning playerListBody'>
                                        <td>{PlayerList.indexOf(player)+1}</td>
                                        <td>{`${player.first_name} ${player.last_name}`}</td>
                                        <td>{player.position}</td>
                                        <td><button className="btn btn-danger" onClick={() => removePlayerListHandler(player)}>Remove</button>
                                            <button className="btn btn-warning" onClick={() => moveToBenchListHandler(player)} >Bench</button>
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default PlayerListComponent;