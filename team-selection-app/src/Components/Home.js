import React from 'react'
import BenchListComponent from './BenchListComponent';
import MessageComponent from './MessageComponent';
import PlayerListComponent from './PlayerListComponent';
import SelectComponent from './SelectComponent';
import TableComponent from './PlayerTableComponent';


function Home() {

    return (
        <div>
            <SelectComponent />
            <MessageComponent/>
            
            <div className='parentDiv'>
                <TableComponent />
                <PlayerListComponent />
                <BenchListComponent/>

            </div>
            
        </div>
    )
}

export default Home