import { createAction } from "@reduxjs/toolkit"

const fetchUserAction = createAction(
    'user/get',
    (userId) => ({
        payload: { userId },
    })
);

const updateUserAction = createAction(
    'user/put',
    (firstname, lastname) => ({
        payload: { firstname, lastname },
    })
);

export { fetchUserAction, updateUserAction }