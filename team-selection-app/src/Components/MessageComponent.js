import React, { useState } from 'react'
import ModalPopupComponent from './ModalPopupComponent'

function MessageComponent() {
    const [name,setName]=useState('')
    const changeName =(nam)=>{
        setName(nam)
    }
    return (
        <div className='messageCSSDiv'>
            <div className='labelDivCss'>
                <label>
                    Your Team name is : {name}
                </label>
            </div>

            <div className=''>
                {/* <button type="button" className='btn btn-success'>Saved</button> */}
                <ModalPopupComponent nameChange={changeName} modalName={name}/>
            </div>

        </div>
    )
}

export default MessageComponent