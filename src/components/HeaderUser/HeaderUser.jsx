import { useState } from 'react';
import './HeaderUser.css';

function HeaderUser({ firstname, lastname }) {
    const [displayForm, setDisplayForm] = useState(false)

    const editOrCancel = (e) => {
        setDisplayForm(!displayForm)
        // console.log(firstname, lastname);
        console.log(displayForm);
    }

    const saveNewName = (e) => {
        console.log("Nouveau nom et prénom sauvegarder");
    }

    return (
        <>
            <div className="header">
                {
                    displayForm ?
                        <>
                            <h1>Welcome back</h1>
                            <form className='forminputs-section'>
                                <input type="text" id="firstname" placeholder={firstname} />
                                <input type="text" id="lastname" placeholder={lastname} />
                            </form>
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