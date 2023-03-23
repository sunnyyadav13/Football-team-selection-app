import React, { useState } from 'react'

function ModalPopupComponent(props) {

    const [name,setName] = useState("");

    const nameChangeHandler=(e)=>{
       e.preventDefault();
       console.log(props);
       props.nameChange(name);
    }

    const teamName=(e)=>{
        setName(e.target.value);
    }

    return (
        <div>
            <button type="button" className="btn btn-success buttonCssDiv" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Save</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Give Team Name</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                        <form onSubmit={nameChangeHandler}>
                        <div className="modal-body">
                            
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Enter Team Name:</label>
                                    <input onChange={teamName} type="text" required className="form-control" name="name" value={name} id="recipient-name"/>
                                </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Save</button>
                        </div>
                        </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPopupComponent