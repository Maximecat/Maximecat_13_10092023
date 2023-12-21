import './HeaderUser.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAction } from '../../redux/actions/user.action';

function HeaderUser({ firstname, lastname }) {
    const dispatch = useDispatch()

    const [displayForm, setDisplayForm] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const error = useSelector((state) => state.user.errorMessage)
    const token = useSelector((state) => state.auth.token)

    const editOrCancel = () => {
        setDisplayForm(!displayForm)
    }

    const saveNewName = (e) => {
        e.preventDefault()
        dispatch(updateAction({ token, firstName, lastName }))
        setDisplayForm(false)
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