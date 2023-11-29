export function login(email, password) {
    return fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(res => res.json())
}

export function getUser(token) {
    return fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
    })
        .then(res => res.json())
}

export function updateUser(token, body) {
    return fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
}