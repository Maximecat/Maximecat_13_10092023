import './HeaderUser.css';

function HeaderUser(firstname, lastname) {
    return (
        <div class="header">
            <h1>Welcome back<br />{firstname + ' ' + lastname}</h1>
            <button class="edit-button">Edit Name</button>
        </div>
    );
}

export default HeaderUser;