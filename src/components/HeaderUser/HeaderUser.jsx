import './HeaderUser.css';
import { useState } from 'react';
import { updateUser } from '../../utils/services/ApiService';

function HeaderUser({ firstname, lastname }) {
    const [displayForm, setDisplayForm] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState("")

    const editOrCancel = (e) => {
        setDisplayForm(!displayForm)
        // console.log(firstname, lastname);
        console.log(displayForm);
    }

    const saveNewName = (e) => {
        console.log("Nouveau nom et prénom sauvegarder");
        console.log(firstName, lastName);
        updateUser(window.sessionStorage.getItem("token") || window.localStorage.getItem("token"), { firstName, lastName })
            .then(res => {
                console.log(res);
                setFirstName(res.body.firstName)
                setLastName(res.body.lastName)
                setDisplayForm(false)
            })
            .catch(() => {
                setError("An error occured")
            })
    }

    return (
        <>
            <div className="header">
                {
                    displayForm ?
                        <>
                            <h1>Welcome back</h1>
                            <form className='forminputs-section' onSubmit={saveNewName}>
                                <input type="text" id="firstname" value={firstName} placeholder={firstname} onChange={(e) => setFirstName(e.target.value || firstName)} />
                                <input type="text" id="lastname" value={lastName} placeholder={lastname} onChange={(e) => setLastName(e.target.value || lastName)} />
                            </form>
                            <p>{error}</p>
                            <div className='formbuttons-section'>
                                <button onClick={saveNewName}>Save</button>
                                <button onClick={editOrCancel}>Cancel</button>
                            </div>
                        </>
                        :
                        <>
                            <h1>Welcome back<br />{firstname + ' ' + lastname}</h1>
                            <button className="edit-button" onClick={editOrCancel} >Edit Name</button>
                        </>

                }
            </div>
        </>
    );
}

export default HeaderUser;