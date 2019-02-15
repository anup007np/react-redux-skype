import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE, SET_EDIT_VALUE} from "../constants/action-types";

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})

export const setEditValue = value => ({
    type: SET_EDIT_VALUE,
    payload: value
})


export const sendMessage = (message, userId, editId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId,
        editId
    }
})

export const deleteMessage = (number, userId) => ({
    type: DELETE_MESSAGE,
    payload: {
        number,
        userId
    }
})

export const editMessage = (number, text, userId) => ({
    type: EDIT_MESSAGE,
    payload: {
        number,
        text,
        userId
    }
})