import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { settingPlayerListData, setupBenchListData } from '../Stores/Reducers/PlayerListReducer';
import { addingPlayerData } from '../Stores/Reducers/PlayerReducer';
import swal from 'sweetalert';

// Bench player list
function BenchListComponent() {
    const dispatch = useDispatch()

    const PlayerList = useSelector(state => state.playerListReducer.PlayerList);
    const BenchList = useSelector(state => state.playerListReducer.BenchList);

    const moveToPlayerListHandler = (player) => {
        if (PlayerList.length < 11) {
            dispatch(settingPlayerListData(player)); //to player list PUSH

            const updatedBenchList = BenchList.filter((pl) => pl.id !== player.id)
            dispatch(setupBenchListData(updatedBenchList))   //updating player list table
        }
        else {
            // alert("BenchList : Team is Already Full");
            swal("Issue!", "BenchList : Team is Already Full", "error");
        }
    }
    const removeBenchListHandler = (player) => {
        dispatch(addingPlayerData(player));  // to player table

        const updatedBenchList = BenchList.filter((pl) => pl.id !== player.id)
        dispatch(setupBenchListData(updatedBenchList))   //updating player list table
    }
    return (
        <div >
            <h4 className='benchPlayerList'>Bench PlayerList</h4>
            <div className='playerListTable'>

                <table className="table ">
                    <thead className='table-head'>
                        <tr className='table-primary'>
                            <th scope="col">#</th>
                            <th scope="col">Bench Player Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Remove/Team</th>
                        </tr>
                    </thead>
                    <tbody >
                        {BenchList.map((player) => {
                            if (player.position === "Midfielder") {
                                return (
                                    <tr key={player.id} className='table-secondary'>
                                        <td>{BenchList.indexOf(player)+1}</td>
                                        <td>{`${player.first_name} ${player.last_name}`}</td>
                                        <td>{player.position}</td>
                                        <td><button className="btn btn-danger" onClick={() => removeBenchListHandler(player)}>Remove</button>
                                            <button className="btn btn-primary" onClick={() => moveToPlayerListHandler(player)}>Team</button>
                                        </td>
                                    </tr>
                                );
                            }
                            else if (player.position === "Defender") {
                                return (
                                    <tr key={player.id} className='table-success'>
                                        <td>{BenchList.indexOf(player)+1}</td>
                                        <td>{`${player.first_name} ${player.last_name}`}</td>
                                        <td>{player.position}</td>
                                        <td><button className="btn btn-danger" onClick={() => removeBenchListHandler(player)}>Remove</button>
                                            <button className="btn btn-primary" onClick={() => moveToPlayerListHandler(player)}>Team</button>
                                        </td>
                                    </tr>
                                );
                            }
                            else if (player.position === "Striker") {
                                return (
                                    <tr key={player.id} className='table-info'>
                                        <td>{BenchList.indexOf(player)+1}</td>
                                        <td>{`${player.first_name} ${player.last_name}`}</td>
                                        <td>{player.position}</td>
                                        <td><button className="btn btn-danger" onClick={() => removeBenchListHandler(player)}>Remove</button>
                                            <button className="btn btn-primary" onClick={() => moveToPlayerListHandler(player)}>Team</button>
                                        </td>
                                    </tr>
                                );
                            }
                            else if (player.position === "Goalkeeper") {
                                return (
                                    <tr key={player.id} className='table-warning'>
                                        <td>{BenchList.indexOf(player)+1}</td>
                                        <td>{`${player.first_name} ${player.last_name}`}</td>
                                        <td>{player.position}</td>
                                        <td><button className="btn btn-danger" onClick={() => removeBenchListHandler(player)}>Remove</button>
                                            <button className="btn btn-primary" onClick={() => moveToPlayerListHandler(player)}>Team</button>
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

export default BenchListComponent;