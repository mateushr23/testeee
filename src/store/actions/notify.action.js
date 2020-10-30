export const actionTypes = {
    CHANGE_NOTIFY: 'CHANGE_LOADING'
}

export const changeNotify =(payload) => ({
    type: actionTypes.CHANGE_NOTIFY,
    payload
})